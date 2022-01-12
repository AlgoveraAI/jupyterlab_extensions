module.exports = {
    resolve: {
        fallback: { 
            crypto: false,
            "https": require.resolve("https-browserify"),
            "http": require.resolve("stream-http"),
            "stream": require.resolve("stream-browserify"),
        },
    },
};
