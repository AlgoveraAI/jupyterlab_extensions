"use strict";
/* -----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const update_dist_tag_1 = require("./update-dist-tag");
const utils = __importStar(require("./utils"));
/**
 * Sleep for a specified period.
 *
 * @param wait The time in milliseconds to wait.
 */
async function sleep(wait) {
    return new Promise(resolve => setTimeout(resolve, wait));
}
// Specify the program signature.
commander_1.default
    .description('Publish the JS packages')
    .option('--skip-build', 'Skip the build step (if there was a network error during a JS publish')
    .option('--skip-publish', 'Skip publish and only handle tags')
    .option('--skip-tags', 'publish assets but do not handle tags')
    .option('--yes', 'Publish without confirmation')
    .option('--dry-run', 'Do not actually push any assets')
    .action(async (options) => {
    utils.exitOnUuncaughtException();
    // No-op if we're in release helper dry run
    if (process.env.RH_DRY_RUN === 'true') {
        return;
    }
    if (!options.skipPublish) {
        if (!options.skipBuild) {
            utils.run('jlpm run build:all');
        }
        if (!options.dryRun) {
            // Make sure we are logged in.
            if (utils.checkStatus('npm whoami') !== 0) {
                console.error('Please run `npm login`');
                process.exit(1);
            }
        }
        // Ensure a clean git environment
        try {
            utils.run('git commit -am "[ci skip] bump version"');
        }
        catch (e) {
            // do nothing
        }
        // Publish JS to the appropriate tag.
        const curr = utils.getPythonVersion();
        let cmd = 'lerna publish from-package ';
        if (options.dryRun) {
            cmd += '--no-git-tag-version --no-push ';
        }
        if (options.yes) {
            cmd += '  --yes ';
        }
        let tag = 'latest';
        if (!/\d+\.\d+\.\d+$/.test(curr)) {
            tag = 'next';
        }
        utils.run(`${cmd} --dist-tag=${tag} -m "Publish"`);
    }
    // Fix up any tagging issues.
    if (!options.skipTags && !options.dryRun) {
        const basePath = path.resolve('.');
        const paths = utils.getLernaPaths(basePath).sort();
        const cmds = await Promise.all(paths.map(update_dist_tag_1.handlePackage));
        cmds.forEach(cmdList => {
            cmdList.forEach(cmd => {
                if (!options.dryRun) {
                    utils.run(cmd);
                }
                else {
                    throw new Error(`Tag is out of sync: ${cmd}`);
                }
            });
        });
    }
    // Make sure all current JS packages are published.
    // Try and install them into a temporary local npm package.
    console.log('Checking for published packages...');
    const installDir = os.tmpdir();
    utils.run('npm init -y', { cwd: installDir, stdio: 'pipe' }, true);
    const specifiers = [];
    utils.getCorePaths().forEach(async (pkgPath) => {
        const pkgJson = path.join(pkgPath, 'package.json');
        const pkgData = utils.readJSONFile(pkgJson);
        specifiers.push(`${pkgData.name}@${pkgData.version}`);
    });
    let attempt = 0;
    while (attempt < 10) {
        try {
            utils.run(`npm install ${specifiers.join(' ')}`, { cwd: installDir });
            break;
        }
        catch (e) {
            console.error(e);
            console.log('Sleeping for one minute...');
            await sleep(1 * 60 * 1000);
            attempt += 1;
        }
    }
    if (attempt == 10) {
        console.error('Could not install packages');
        process.exit(1);
    }
    // Emit a system beep.
    process.stdout.write('\x07');
});
commander_1.default.parse(process.argv);
//# sourceMappingURL=publish.js.map