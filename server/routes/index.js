var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/people', function(req, res, next) {
  res.json([
    {
      "name": "allen",
      "sex": "man",
      "age": 18,
      "id": 0
    },
    {
      "name": "june",
      "sex": "women",
      "age": 18,
      "id": 1
    }
  ])
});
module.exports = router;
