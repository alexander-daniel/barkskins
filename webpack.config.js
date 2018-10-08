const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const STATIC_DIR = path.resolve(__dirname, 'static');

module.exports = {
  mode: 'development',
  entry: [
    './src/js/index.js',
    './src/scss/style.scss'
  ],

  output: {
    path: STATIC_DIR,
    filename: 'js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].css', outputPath: 'css/' } },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      _actions: path.resolve(__dirname, 'src/js/actions/'),
      _components: path.resolve(__dirname, 'src/js/components'),
      _models: path.resolve(__dirname, 'src/js/models'),
      _reducers: path.resolve(__dirname, 'src/js/reducers'),
      _resolvers: path.resolve(__dirname, 'src/js/resolvers'),
      _selectors: path.resolve(__dirname, 'src/js/selectors/'),
      _widgets: path.resolve(__dirname, 'src/js/components/widgets/'),
      _utils: path.resolve(__dirname, 'src/js/utils/')
    }
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: false
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: STATIC_DIR,
    historyApiFallback: true,
    port: 8888,
    stats: {
      assets: true,
      modules: false
    }
  },

  stats: {
    assets: true,
    modules: false
  }
};
