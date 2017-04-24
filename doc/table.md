# 表
### user表
```
User: [{
    id: '',
    username: '',
    password: '',
    headImg: 'img',
    uploadB: ['bookID'],
    commentB: [],
    nodes: [],
    readingB: [],
    wantReadB: []
    readB: [],
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
    // average_score: 5,
    rcmdWords: '',
    comments: [
        {
            id: '',
            userid: '',
            username: '',
            content: '',
            time: '',
            score: '',
        }
    ],
    userId: ''
}]
```

### 纸书
```
Paper: [
{
    poster: '',
    minImg: '',
    bookName: '',
    text: '',
}]
```

### 热榜
```
Hot: [
    {
        top: 1,
        bookid: '',
        bookid: '',
        img: '',
        name: '',
        avScore: '',
    }
]
```