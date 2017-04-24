/**
 * Created by Administrator on 2017/4/23.
 */
var express = require('express');
var router = express.Router();

var Book = require('../models/book')
var utils = require('../utils/utils')

// 图书分类列表
router.get('/list/:classify', function (req, res, next) {
    var classifyName = req.params.classify;
    // console.log(">>>>>>>>>>>>>",classifyName)
    Book.find({classify: classifyName}, {
        _id: 1,
        img: 1,
        name: 1,
        author: 1,
        tag: 1,
        classify: 1,
        // average_score: Number,
        rcmdWords: 1,
        comments: 1,
        userId: 1,
        pub: 1
    }, {}, function (err, result) {
        if(err) {
            console.log('err >>>', err);
            res.json({
                s: 0,
                d: err,
            })
        } else {
            res.json({
                s: 1,
                d: result
            })
        }
    })
});

// 图书列表
router.get('/lists', function (req, res, next) {
    Book.find({}, {
        _id: 1,
        img: 1,
        name: 1,
        author: 1,
        tag: 1,
        classify: 1,
        // average_score: Number,
        rcmdWords: 1,
        comments: 1,
        userId: 1,
        pub: 1
    }, {}, function (err, result) {
        if(err) {
            console.log('err >>>', err);
            res.json({
                s: 0,
                d: err,
            })
        } else {
            res.json({
                s: 1,
                d: result
            })
        }
    })
});

// 图书详细
router.get('book/:id', function (req, res, next) {
    var bookId = req.param.id;
    Book.find({_id: bookId}, {
        img: 1,
        name: 1,
        author: 1,
        tag: 1,
        classify: 1,
        // average_score: Number,
        rcmdWords: 1,
        comments: 1,
        userId: 1,
        pub: 1
    }, {}, function (err, result) {
        if(err) {
            console.log('err >>>', err);
            res.json({
                s: 0,
                d: err,
            })
        } else {
            res.json({
                s: 1,
                d: result[0]
            })
        }
    })
})

// 用户添加书
router.post('/add', function (req, res, next) {
    var p = req.body;
    // console.log('t>>>>,', p)
    // console.log('type >>>>,', typeof p)
    // console.log('len >>>>,', p.length)
    Book.create(p, function (err) {
        if(err) {
            console.log('>>> 书添加失败');
            res.json({
                s: 0,
                d: p
            })
        } else {
            res.json({
                s: 1,
                d: p
            })
        }
    })
});

// comment
router.post('/comment', function (req, res, next) {
    var p = req.body;
    console.log(p)
    Book.update({_id: p.bookId}, {$push: {comments: p}}, function (err) {
        if(err) {
            console.log('err>>>>', err)
            res.json({
                s: 0,
                d: err
            })
        } else {
            res.json({
                s: 1,
                d: p
            })
        }
    })
})

// top 10
router.get('/books/top', function (req, res, next) {
    Book.find({}, {}, {}, function (err, allbook) {
        if(err) {
            console.log('book查询失败 >>>', err);
            res.json({
                s: 0,
                d: err,
            })
        } else {
            allbook.forEach(function (book) {
                var sun = 0;
                var avg = 0;
                var comments = book.comments;
                if(comments.length) {
                    comments.forEach(function (v) {
                        sun += v.score;
                    })
                    avg = sun/comments.length
                }
                book.averageScore = avg;
            })
            res.json({
                s: 1,
                d: allbook.sort(utils.sortBy('averageScore'))
            })
        }
    })
})

// 搜索借口
router.get('/search', function (req, res, next) {
    var bookName = req.query.name;
    Book.find({name: bookName}, {
        img: 1,
        name: 1,
        author: 1,
        tag: 1,
        classify: 1,
        // average_score: Number,
        rcmdWords: 1,
        comments: 1,
        userId: 1,
        pub: 1
    }, {}, function (err, result) {
        if(err) {
            console.log('err >>>', err);
            res.json({
                s: 0,
                d: err,
            })
        } else {
            if(result.length > 0) {
                res.json({
                    s: 1,
                    d: result[0]
                })
            } else {
                res.json({
                    s: 2,
                    d: '未找到书'
                })
            }

        }
    })
})

module.exports = router;