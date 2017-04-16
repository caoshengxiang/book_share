
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