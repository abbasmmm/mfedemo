const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 5005,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [    
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mfe1: 'mfe1@http://localhost:5001/remoteEntry.js',
      },
      shared: packageJson.dependencies
    })
  ],

};

module.exports = merge(commonConfig, devConfig);
