var express = require('express');
var router = express.Router();

const {  ApiError, Client, Environment  } = require('square')

const client = new Client({
  timeout:3000,
  environment: Environment.Sandbox, // `Environment.Sandbox` to access sandbox resources
  accessToken: 'EAAAEBWruGFLvWCaxNllBS43zaP4oQ1ntO89cyim60g21-msUzWJqg6SLVYlI67D',
})

/* Handle notifications. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
    const signature = req.header('x-square-signature');
    const body = JSON.stringify(req.body);
    console.log('Notifications')
    console.log(body)
    // Send a 200 response to indicate success
    res.sendStatus(200);
});

module.exports = router;
