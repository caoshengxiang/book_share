/**
 * Created by Administrator on 2017/4/16.
 */

var mongoose = require('../db');
var Schema = mongoose.Schema;

var userSchema = Schema({
    // id: '',
    username: String,
    password: String,
    headImg: String,
    upload_b: Array,
    comment_b: Array,
    nodes: Array,
    reading_b: Array,
    want_read_b: Array,
    read_b: Array,
});

module.exports = mongoose.model('User', userSchema);