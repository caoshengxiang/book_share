# 表
### user表
```
User: [{
    id: '',
    username: '',
    password: '',
    headImg: 'img',
    upload_b: ['bookID'],
    comment_b: [],
    nodes: [],
    reading_b: [],
    want_read_b: []
    read_b: [],
}]
```

### 图书表
```
Book: [{
    id: '',
    img: '',
    name: '',
    author: '',
    tag: [],
    classify: '',
    average_score: 5,
    rcmd_words: '',
    comments: [
        {
            id: '',
            userid: '',
            username: '',
            content: '',
            time: '',
            score: '',
        }
    ]
}]
```

### 纸书
```
Paper: [
{
    poster: '',
    min_img: '',
    book_name: '',
    text: '',
}]
```

### 热榜
```
Hot: [
    {
        top: 1,
        bookid: ''，
        img: '',
        name: '',
        av_score: '',
    }
]
```