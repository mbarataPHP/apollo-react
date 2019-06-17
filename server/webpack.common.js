const path = require('path');


module.exports = {
    module: {
        rules: [
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            }
        ]
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['*', '.mjs', '.js', '.vue', '.json', '.gql', '.graphql']
    },

    target: 'node',
    externals: ['encoding', 'utf-8-validate', 'bufferutil']
};