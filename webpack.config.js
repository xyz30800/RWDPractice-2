const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.html']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
      },
      {
        exclude: /node_modules/,
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.(svg|png|jpg)$/,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: 'css-loader!sass-loader'
        // })
        use: [{ 
            loader: 'style-loader' 
          }, { 
            loader: 'css-loader',
            options: { 
              minimize: true 
            }
          }, { 
            loader: 'sass-loader' 
          }
        ] 
      },
      {
        exclude: /node_modules/,
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};