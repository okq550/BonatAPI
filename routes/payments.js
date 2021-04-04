var express = require('express');
var router = express.Router();

/* Handle payments. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
    console.log(req)
    res.send('respond with a resource');
});

module.exports = router;
