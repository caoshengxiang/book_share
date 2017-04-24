
# 1.图书分类列表
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


# 2.图书详细
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

# 3.用户添加书
### 接口
```
    post /books/add
```

### 参数
```
    {
        // id: '',
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

# 4.图片上传
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

# 5.评论
### 接口
```
    post /books/comment
```

### 参数
```
    {
        userid: '',
        username: '',
        content: '',
        time: '',
        score: '',
    }
```

### 返回
```
{
    s: 1,
    d: ''
}
```

# 6.图书列表
### 接口
```
get /books/lists
```
### 参数
```
{

}
```
### 返回
{
    s: 1,
    d: []
}

# 7.搜索
### 借口
```
get /books/search
```
### 参数
```
{
    name: ''
}
```
### 返回
{
    s: 1, // 2 未找到书
    d: {}
}

# 8. top10
### 借口
```
get /books/top
```
### 参数
```
{

}
```
### 返回
{
    s: 1,
    d: []
}