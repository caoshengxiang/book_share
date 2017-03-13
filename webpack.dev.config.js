var webpack = require('webpack'),
  path = require('path');

// 生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');

// css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 压缩CSS模块;
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var config = require('./webpack.config')


config.devServer = {    // 设置本地Server;
  contentBase: path.join(__dirname,'built'),  // 设置启动文件目录;
  host: '127.0.0.1', // 主机名或IP
  port: 8080,      // 设置端口号；
  compress: true, // 设置gzip压缩;
  inline:true,  // 开启更新客户端入口(可在package.json scripts 里设置 npm run xxx);
  hot: true,    // 设置热更新(可在package.json scripts 里设置 npm run xxx);
  open: true, // 打开浏览器
};
config.plugins = [
  /*编译生成html代码并在html中插入<script>标签*/
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname+'/built/index.html'),   // 目标文件
    template: path.resolve(__dirname+'/client/index.html'), //模板文件
    inject:'body', // 要把script插入到标签里
    hash:true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
    chunks:["index"], // chunks这个参数告诉插件要引用entry里面的哪几个入口
  }),

  new ExtractTextPlugin("css/style.css"), //提取出来的样式放在style.css文件中

  //webpack内置自动加载插件配合resolve.alias做全局插件;
  new webpack.ProvidePlugin({
    $: 'jquery'                              //文件里遇见‘$’加载jquery;
  }),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
];

module.exports = config;