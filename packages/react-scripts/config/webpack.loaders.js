'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

exports.postcss = {
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebookincubator/create-react-app/issues/2677
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-import'),
        require('postcss-cssnext'),
        require('postcss-mixins'),
      ],
    },
  },
};

exports.svg = {
  test: /\.component\.svg$/,
  loader: 'svg-react-loader',
  query: {
    classIdPrefix: '[name]-[hash:8]__',
  },
};

exports.sourceMap = {
  enforce: 'pre',
  test: /\.js$/,
  loader: 'source-map-loader',
};

exports.typeScript = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader',
};

exports.cssModules = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    sourceMap: true,
    localIdentName: '[name]__[local]___[hash:base64:5]',
  },
};

exports.sass = {
  test: /\.scss$/,
  use: [
    require.resolve('style-loader'),
    require.resolve('css-loader'),
    {
      loader: require.resolve('sass-loader'),
      options: {
        sassIncludePaths: [resolve('node_modules')],
      },
    },
  ],
};

exports.productionSass = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract(
    Object.assign({
      fallback: require.resolve('style-loader'),
      use: [
        require.resolve('css-loader'),
        {
          loader: require.resolve('sass-loader'),
          options: {
            sassIncludePaths: [resolve('node_modules')],
          },
        },
      ],
    })
  ),
};
