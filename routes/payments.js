var express = require('express');
var router = express.Router();

/* Handle payments. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
    const signature = req.header('x-square-signature');
    const body = JSON.stringify(req.body);
    console.log(body)
    // Send a 200 response to indicate success
    res.sendStatus(200);
});

module.exports = router;
