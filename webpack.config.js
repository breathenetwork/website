const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const instance = ({name, target}) => ({
    ...(target === 'node' ? {externals: nodeExternals()} : {}),
    entry: {
        [name]: `./${name}.js`,
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'static', 'js'),
        filename: `${name}.js`
    },
    target: target,
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-inline-import-loader',
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                ['inline-import', {
                                    extensions: ['.ascii']
                                }]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/style.css',
            chunkFilename: '../css/[id].css',
        }),
        new CopyWebpackPlugin([
            {
                context: 'public',
                from: '**/*',
                to: path.resolve(__dirname, 'dist', 'static'),
                toType: 'dir'
            }
        ])
    ]
});

module.exports = [
    instance({name: 'server', target: 'node'}),
    instance({name: 'client', target: 'web'}),
];