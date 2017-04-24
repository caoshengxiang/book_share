/**
 * Created by allen on 17-4-24.
 */

var mongoose = require('../db')
var Schema = mongoose.Schema;

var paperSchema = Schema({
    poster: String,
    minImg: String,
    bookName: String,
    text: String,
})

module.exports = mongoose.model('paper_book', paperSchema);