### ERROR in   TypeError: $export is not a function
> 尝试添加exclude: /node_modules/后loader: 'babel-loader'

---

### ERROR in ./src/app.vue
> webpack.config.js 配置问题，options 中loaders sass,scss语言, 
 ```html
    <style lang="scss"><style>
```

```js
    {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
                  loaders: {
                    // 
                    // 
                    // 
                   'scss': 'vue-style-loader!css-loader!sass-loader',
                  'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                   }
         }
    },
```

### .vue中style标签报错
> 没有vue-style-loader

### Module not found: Error: Can't resolve 'color.css'
> require('color.css') 或 import 'color.css'
    引入时错误： import 'color.css';
    解决：import './color.css';

== 待解 ==
### import '*.scss'; ExtractTextPlugin 提取的css文件依然是sass语法 ？？？？？？？
```
     // 解析.css文件
                    {
                        test: /\.(css|scss|sass)$/,
                        loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader'})
```

== 解 ==
### repository access denied. access via a deployment key is read-only.
    fatal: Could not read from remote repository.
> 1.您可以随时使用https在您的服务器上设置第二个远程：
    git remote add edit-only-origin https://caoshengxiang@bitbucket.org/caoshengxiang/book_share.git
    然后，您可以进行小编辑，提交，然后使用命令
    git push edit-only-origin
    这将提示您输入用户名和密码。
    2.正解，因为bitbucket中的ssh密钥默认使用.ssh目录下的id_rsa，我生成迷药时改成其他名字。所以直接复制id_rsa.pub，添加密钥
== 待解 ==
### npm run build生成莫名生成main.js（内容和index.js相同）
>