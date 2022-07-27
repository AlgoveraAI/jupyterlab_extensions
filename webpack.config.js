const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  stats: {
    errorDetails: true,
    children: true,
  },
  plugins: [
    new NodePolyfillPlugin(),
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
    modules: ["node_modules"],
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      assert: require.resolve("assert/"),
      // "assert": false,
      // "browser": false,
    },
  },
};
