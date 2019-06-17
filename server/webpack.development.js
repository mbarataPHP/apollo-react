const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
    entry:  path.join(__dirname, 'src/main.js'),
    mode: 'development',

});