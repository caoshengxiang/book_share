# 登录
### 接口
```
post /users/signin
```
### 参数
```
{
    "username": "", // 账户名
    "password": "fdsw23894sfdljksdf2324fsjk", // 密码，前端md5加密
}
```
### 返回
{
    s: 1，// 0: 失败；1：成功；2：用户名不存在；3：密码错误
    d: {
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
    }
}

# 注册
### 接口
```
post /users/reg
```
### 参数
```
{
    "username": "carlos", // 账户名
    "password": "fdsw23894sfdljksdf2324fsjk", // 密码，前端md5加密
}
```
### 返回
{
    s: 1, // 0: 失败；1：成功；2：用户名存在；
    d: {
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
    }
}

# 用户列表
### 接口
```
get /users/list
```
### 参数
```
{}
```
### 返回
{
    s: 1,
    d: []
}

# 指定某个用户
### 接口
```
get /users/user/:id
```
### 参数
```
{}
```
### 返回
{
    s: 1,
    d: {}
}