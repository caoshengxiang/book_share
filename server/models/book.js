/**
 * Created by Administrator on 2017/4/16.
 */
var mongoose = require('../db');
var Schema = mongoose.Schema;

var commentsSchema = Schema({
    // id: String,
    userId: String,
    username: String,
    content: String,
    time: String,
    score: Number,
    bookId: String
})


var bookSchema = Schema({
    img: String,
    name: String,
    author: String,
    tag: Array,
    classify: String,
    // average_score: Number,
    rcmdWords: String,
    comments: [commentsSchema],
    userId: '',
    pub: Boolean
})

module.exports = mongoose.model('Book', bookSchema);