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
    
### import '*.scss'; ExtractTextPlugin 提取的css文件依然是sass语法 ？？？？？？？
```
     // 解析.css文件
                    {
                        test: /\.(css|scss|sass)$/,
                        loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader'})
```