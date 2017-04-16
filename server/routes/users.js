var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.post('/signin', function(req, res, next) {
    var p = {
        username: req.body.username,
        password: req.body.password,
    };
    console.log('>>>参数：', p)
    User.find( p, {password: 0}, function (err, result) {
        if(err){
            console.log("登录：", err)
            res.json({
                s: 0,
                d: {}
            })
        } else {
            if(result.length === 0) {
                res.json({
                    s: 2, // TODO 区分用户名不存在还是密码错误
                    d: {}
                })
            } else {
                res.json({
                    s: 1,
                    d: result[0]
                })
            }
        }
    })
});
router.post('/reg', function(req, res, next) {
    var p = {
        username: req.body.username,
        password: req.body.password,
        headImg: '',
        upload_b: [],
        comment_b: [],
        nodes: [],
        reading_b: [],
        want_read_b: [],
        read_b: [],
    };
    User.find({username: req.body.username}, function (err, result) {
        if(!err) { console.log('err: ',err)
            if(result.length > 0) {
                console.log("用户名存在");

            } else {
                console.log("注册中。。。");
                User.create(p, function (err) {
                    if(err) {
                        console.log('注册写入用户错误')
                    } else {
                        res.json({
                            s: 1,
                            d: p
                        })
                    }
                })
            }

        } else {
            res.json({
                s: 0,
                d: {}
            })
        }
    })
});

router.get('/get_u', function (req, res, next) {
    res.json({s: 1})
})
module.exports = router;
