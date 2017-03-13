var webpack = require('webpack'),
  path = require('path');

// 生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');

// css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 压缩CSS模块;
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var config = require('./webpack.config')

config.plugins = [
  new webpack.ProvidePlugin({
    "$": "jquery"
  }),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),

  //webpack内置js压缩插件;
  new webpack.optimize.UglifyJsPlugin({
    compress: {                               //压缩;
      warnings: false                      //关闭警告;
    }
  }),

  new ExtractTextPlugin("css/style.css"), //提取出来的样式放在style.css文件中

  /*压缩css（注:因为没有用style-loader打包到js里所以webpack.optimize.UglifyJsPlugin的压缩本身对独立css不管用）;*/
  /*new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,                //正则匹配后缀.css文件;
    cssProcessor: require('cssnano'),            //加载‘cssnano’css优化插件;
    cssProcessorOptions: { discardComments: {removeAll: true } }, //插件设置,删除所有注释;
    canPrint: true                             //设置是否可以向控制台打日志,默认为true;
  }),*/

  /*编译生成html代码并在html中插入<script>标签*/
  /*new HtmlWebpackPlugin({
    filename: path.resolve(__dirname+'/built/index.html'),   // 目标文件
    template: path.resolve(__dirname+'/client/index.html'), //模板文件
    inject:'body', // 要把script插入到标签里
    hash:true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
    chunks:["index"], // chunks这个参数告诉插件要引用entry里面的哪几个入口
  }),*/
]