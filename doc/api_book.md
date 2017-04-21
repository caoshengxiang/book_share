
# 图书分类列表
### 接口
```
get /books/list/:classify
```
### 参数
```
{
    classify: ''
}
```
### 返回
{
    s: 1,
    d: []
}


# 图书详细
### 接口
```
get /books/book/:id
```
### 参数
```
{
    id: ''
}
```
### 返回
{
    s: 1,
    d: {}
}

# 用户添加书
### 接口
```
    post /books/add
```

### 参数
```
    {
        id: '',
        img: '',
        name: '',
        author: '',
        tag: [],
        classify: '',
        rcmdWords: '',
        userId: ''
    }
```

### 返回
```
{
    s: 1,
    d: {}
}
```

# 图片上传
### 接口
```
    post /upload/uploader
```

### 参数
```
    {

    }
```

### 返回
```
{
    file: {},
    url: ''
}
```