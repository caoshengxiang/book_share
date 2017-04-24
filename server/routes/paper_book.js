/**
 * Created by allen on 17-4-24.
 */

var express = require('express');
var router = express.Router();

var PaperBook = require('../models/paper_book')

router.get('/lists', function (req, res, next) {

    res.json({
        s: 1,
        d: []
    })
})

module.exports = router;