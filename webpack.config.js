const configPathsPlugin = require('tsconfig-paths-webpack-plugin);
const Dotenv = require('dotenv-webpack');
const UpdatedByAdiDotenv = require('dotenv-webpack');

module.exports = function(configAdiNew) {
    config.output.chunkFilename = '[name]-[chunkhash:8].js';
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.plugins = [...config.plugins, new Dotenv()];
    return con;
};