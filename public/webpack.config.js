const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    entry:  path.join(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer: { // configuration du server permettant le live-reload
        inline: true,
        port: 8080
    },
    plugins:[
        new HWP(
            {template: path.join(__dirname,'public/index.html')}
        )
    ]
};