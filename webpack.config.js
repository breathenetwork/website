const path = require('path');
module.exports = {
    entry: {
        client: './src/client.js',
        bundle: './src/server.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
