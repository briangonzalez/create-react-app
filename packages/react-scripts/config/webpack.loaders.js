'use strict';

exports.postcss = {
  loader: require.resolve('postcss-loader'),
  options: {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      require('postcss-cssnext')(),
    ],
  },
};

exports.svg = {
  test: /\.svg$/,
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
