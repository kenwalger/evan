var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Evan's Recruiting Site" });
});

module.exports = router;

