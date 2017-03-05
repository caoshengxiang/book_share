var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'), // 生成html
    ExtractTextPlugin = require('extract-text-webpack-plugin'), //css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'), // //压缩CSS模块;
    path = require('path');

module.exports =
    {
        entry:
            {
                //入口文件
                "index": path.resolve(__dirname+'/client/index.js'),
            },
        output: {
            path: path.resolve(__dirname+'/built/'),  //输出文件夹
            filename:'[name].js',   //最终打包生成的文件名(只是文件名，不带路径的哦)
            // publicPath: '/client/assets/', // webpack-dev-server 伺服的文件是相对 publicPath 这个路径的, 在 index.html 文件当中引入的路径也发生相应的变化: 如：<script src="assets/index.js"></script>
        },
        resolve: {
            // 别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
             alias: {
                 vue: 'vue/dist/vue.js',
                 // jquery: path.resolve(__dirname,'./src/j/jquery.min.js') //绝对路径;
             },

            //设置可省略文件后缀名(注:如果有文件没有后缀设置''会在编译时会报错,必须改成' '中间加个空格。ps:虽然看起来很强大但有时候省略后缀真不知道加载是啥啊~);
            extensions: [' ', '.js', '.css', '.sass', '.scss', '.vue', '.less', '.json'],

            //查找module的话从这里开始查找;
            modules: [path.resolve(__dirname, "client"), "node_modules"], //绝对路径;
         },
        externals: {

        },
        module:{
            rules: [
                // 解析js文件，用babel编译es6
                {
                    "test": /\.js/,
                    "loader": "babel-loader",
                    "exclude": /node_modules/,
                    // "include": [path.resolve(__dirname, './client/')]
                },
                // 解析.vue文件
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: { // vue文件中sass、less等
                        loaders: {
                            js: 'babel-loader',
                            css: "vue-style-loader!css-loader",
                            sass: "vue-style-loader!css-loader!sass-loader",
                            less: "vue-style-loader!css-loader!less-loader",
                        }
                    }
                },
                // 解析.css文件
                {
                    test: /\.(css|scss|sass)$/,
                    loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader'})
                },
                // {
                //     test: /\.css$/,
                //     loader: 'style-loader!css-loader'
                // },
                // 解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
                // {
                //     test: /\.scss$/,
                //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'css-loader', 'sass-loader') // 这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
                // },
                // 解析less
                {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            ]
        },
        plugins:[
            /*编译生成html代码并在html中插入<script>标签*/
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname+'/built/index.html'),   // 目标文件
                template: path.resolve(__dirname+'/client/index.html'), //模板文件
                inject:'body',
                hash:true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
                chunks:["index"]
            }),

            new ExtractTextPlugin("css/style.css"), //提取出来的样式放在style.css文件中

            /*压缩css（注:因为没有用style-loader打包到js里所以webpack.optimize.UglifyJsPlugin的压缩本身对独立css不管用）;*/
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,                //正则匹配后缀.css文件;
                cssProcessor: require('cssnano'),            //加载‘cssnano’css优化插件;
                cssProcessorOptions: { discardComments: {removeAll: true } }, //插件设置,删除所有注释;
                canPrint: true                             //设置是否可以向控制台打日志,默认为true;
            }),

            //webpack内置js压缩插件;
            new webpack.optimize.UglifyJsPlugin({
                compress: {                               //压缩;
                    warnings: false                      //关闭警告;
                }
            }),

            //webpack内置自动加载插件配合resolve.alias做全局插件;
            new webpack.ProvidePlugin({
                $: 'jquery'                              //文件里遇见‘$’加载jquery;
            })
        ],
        devServer: {    // 设置本地Server;
            contentBase: path.join(__dirname,'built'),  // 设置启动文件目录;
            host: '127.0.0.1', // 主机名或IP
            port: 8080,      // 设置端口号；
            compress: true, // 设置gzip压缩;
            // inline:true,  // 开启更新客户端入口(可在package.json scripts 里设置 npm run xxx);
            // hot: true    // 设置热更新(可在package.json scripts 里设置 npm run xxx);
        },
    }