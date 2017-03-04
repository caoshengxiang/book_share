var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'), // 生成html
    ExtractTextPlugin = require('extract-text-webpack-plugin'), //css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
    path = require('path');

module.exports =
    {
        entry:
            {
                //入口文件
                "index": path.resolve(__dirname+'/src/index.js'),
            },
        output: {
            path: path.resolve(__dirname+'/built/'),  //输出文件夹
            filename:'[name].js'   //最终打包生成的文件名(只是文件名，不带路径的哦)
        },
        resolve: {
             alias: {
                vue: 'vue/dist/vue.js'
             },
            // extensions: ['.js', '.css', '.sass', '.vue'],
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
                    // "include": [path.resolve(__dirname, './src')]
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
                // }
            ]
        },
        plugins:[
            /*编译生成html代码并在html中插入<script>标签*/
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname+'/built/index.html'),   // 目标文件
                template: path.resolve(__dirname+'/src/index.html'), //模板文件
                inject:'body',
                hash:true,  //代表js文件后面会跟一个随机字符串,解决缓存问题
                chunks:["index"]
            }),
            new ExtractTextPlugin("css/style.css") //提取出来的样式放在style.css文件中

        ]
    }