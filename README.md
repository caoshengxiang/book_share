> eslint、按需代码分割require.ensure()、
-----------
## 运行
### 安装环境
    * git 
    * node/npm
    * npm install -g json-server 全局安装，前端模拟数据借口
    * npm install -g supervisor 服务器热更新
    * 安装mongodb
### 运行项目
    1. git clone git@bitbucket.org:caoshengxiang/book_share.git
    2. npm install
    3. json-server json_server/test.json
    4. npm run dev
    5. 数据库启动 cd *Server\3.2\bin;（对应安装目录）
        命令> mongod --dbpath=/path/mongodb --fork=true logpath=/path/mongod.log
        （推荐）以配置文件形式保存配置：
        port=12345
        bind_ip=10.10.10.10
        logpath=/path/mongod.log
        pidfilepath=/path/mongod.pid
        logappend=true
        fork=true



    生产环境
    1. npm run build 打包到server/public目录下
    2. npm run start 启动服务器

### 注意:
    图片上传在public目录下一定要有upload目录

### 不同环境下修改说明
    package.json修改：NODE_ENV环境变量设置linux使用export,win下使用set,如下：
    1. linux: export NODE_ENV=production
    2. win: set NODE_ENV = production
           网上还有说（为测试）：
                 npm i cross-env --save-dev
                cross-env NODE_ENV=blablabl
            注意：在win下process.env.NODE_ENV ==="production"为false；
            set NODE_ENV=production后面不要加空格

### json-server安装及使用
     安装：
     $ npm install -g json-server
     使用：
      1. cd .json目录
      2. json-server *.json(替代端口; 您可以在其他端口上使用--port标志启动JSON Server ：$ json-server --watch db.json --port 3004)
      3. 访问：控制台地址http://localhost:3000
      4. webstorm 按两下Shift键搜索 restful进入REST Client，可查看及操作数据（response、request）(You can use any HTTP verbs (GET, POST, PUT, PATCH and DELETE) and access your resources from anywhere using CORS or JSONP.)
       == 注意： ==
        POST，PUT或PATCH请求应包含一个Content-Type: application/json标头，以在请求正文中使用JSON。否则将导致200 OK，但不会对数据进行更改。

    ==restful==
    GET（SELECT）：从服务器取出资源（一项或多项）。
    POST（CREATE）：在服务器新建一个资源。
    PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
    PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
    DELETE（DELETE）：从服务器删除资源。

参考文档:
[https://github.com/typicode/json-server](https://github.com/typicode/json-server)
教程：
[https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)

## 项目
### bitbucket
[book_share](git@bitbucket.org:caoshengxiang/book_share.git): git@bitbucket.org:caoshengxiang/book_share.git
------------

### package.json
#### script
```
    "build": "webpack",
    "dev": "webpack-dev-server --inline --hot"
```


#### 依赖包
##### babel
```
   "babel-core": "^6.23.1",
   "babel-loader": "^6.3.2",
   "babel-plugin-transform-runtime": "^6.23.0",
   "babel-preset-es2015": "^6.22.0",
   "babel-preset-stage-0": "^6.22.0",
   "babel-runtime": "^6.23.0", 
```
##### lader
```
    "css-loader": "^0.26.2",
    "file-loader": "^0.10.1",
    
    // sass
    "node-sass": "^4.5.0",
    "sass-loader": "^6.0.2",
    
    // less
    "less": "^2.7.2",
    "less-loader": "^2.2.3",
    
    // vue文件<style>样式
    "vue-style-loader": "^2.0.3",

    // 图片
    "url-loader": "^0.5.8",
```
##### 生成html
```
    "html-webpack-plugin": "^2.28.0",
```
##### vue 
```
    "vue": "^2.2.1",
    "vue-hot-reload-api": "^2.0.11",
    "vue-loader": "^11.1.4",
    "vue-template-compiler": "^2.2.1",
        
```
##### webpack
```
    "webpack": "^2.2.1",
    "webpack-dev-server": "^2.4.1"
```
#### css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
```
    "extract-text-webpack-plugin": "^2.0.0",
```
#### 压缩CSS模块(注:因为没有用style-loader打包到js里所以webpack.optimize.UglifyJsPlugin的压缩本身对独立css不管用)
```
    "optimize-css-assets-webpack-plugin": "^1.3.0",
```
#### 组件
```
    "jquery": "^3.1.1",
```


------------


### 参考
#### webpack2、vue2项目配置教程
* [http://www.jianshu.com/p/a5361bff1cd8](http://www.jianshu.com/p/a5361bff1cd8)
* [http://blog.csdn.net/github_26672553/article/details/52801047](http://blog.csdn.net/github_26672553/article/details/52801047)


#### 其他
* webpack从 v1 迁移到 v2: [https://doc.webpack-china.org/guides/migrating/](https://doc.webpack-china.org/guides/migrating/)



#### 文档
* webpack-dev-server文档：[http://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli](http://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)

* json-server文档、教程：[https://github.com/typicode/json-server](https://github.com/typicode/json-server)

* mongoose文档：http://www.nodeclass.com/api/mongoose.html

#### 设计
* 看看豆：https://kankandou.com/
* 豆瓣读书：https://book.douban.com/
* 亚马逊：https://www.amazon.cn/
-------------


# 代码约定
    1. server日志都以>>> 开头
    2. 返回数据
        {
            s: 1, // 0 server错误，1成功，其他是状态值
            d: data
        }