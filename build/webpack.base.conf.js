const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|es6)$/,
        use: 'babel-loader',
        exclude: [path.resolve(__dirname, '../node_modules')]
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'img/[name].[hash].[ext]',
            fallback: 'file-loader'
          }
        }]
      },
      {
        test: /\.(woff|woff2|ttc|ttf|eot|otf)/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@static': path.resolve(__dirname, '../src/static'),
      '@request': path.resolve(__dirname, '../src/request'),
      '@components': path.resolve(__dirname, '../src/view/components'),
      '@src': path.resolve(__dirname, '../src'),
    }
  }
}
