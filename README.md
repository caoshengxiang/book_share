> eslint、按需代码分割require.ensure()、
-----------
## 运行
### 安装环境
    * git 
    * node/npm
    * 

### 运行项目
    1. git clone git@bitbucket.org:caoshengxiang/book_share.git
    2. npm install
    3. npm run dev

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
    
    // vue文件<style>样式
    "vue-style-loader": "^2.0.3",
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
------------



### 参考
#### webpack2、vue2项目配置教程
* http://www.jianshu.com/p/a5361bff1cd8 
* http://blog.csdn.net/github_26672553/article/details/52801047


#### 其他
* https://doc.webpack-china.org/guides/migrating/  webpack从 v1 迁移到 v2
-------------