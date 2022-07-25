module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      // http: require.resolve("stream-http"),
      // https: require.resolve("https-browserify"),
      // stream: require.resolve("stream-browserify"),
      assert: false,
      http: false,
      https: false,
      stream: false,
      browser: false,
    },
  },
};
