const path= require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  resolve:{
    extensions: ['.js','.vue'],
    //경로 별칭
    alias: {
      '~' : path.resolve(__dirname,'src') ,
      'assets' : path.resolve(__dirname, 'src/assets')
    }
  },
  entry :'./src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js',
    clean: true
  },
  
  module: {
    rules: [
      {
        test:/\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/ ,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  } ,

  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ],

  // 개발 서버 옵션
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }
}