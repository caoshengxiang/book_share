/**
 * Created by allen on 17-4-24.
 */
var mongoose = require('../db');
var Schema = mongoose.Schema;

var bookTopSchema = Schema({
    top: Number,
    bookid: Number,
    img: String,
    name: String,
    avScore: String,
})

module.exports = mongoose.model('book_top', bookTopSchema);