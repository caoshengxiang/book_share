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