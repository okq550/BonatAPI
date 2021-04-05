var express = require('express');
var router = express.Router();

const {  ApiError, Client, Environment  } = require('square')

const client = new Client({
    timeout:3000,
    environment: Environment.Production, // `Environment.Sandbox` to access sandbox resources
    accessToken: 'EAAAEeIfHSYp-sGu3Cygm8gCEmYJEe4DHnJOoJWOQFIr5zM4HleeR8FuCUdnMQ_8',
  })

/* Handle payments. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
    const signature = req.header('x-square-signature');
    console.log('Signature in payment: ' + signature);
    const body = JSON.stringify(req.body);
    console.log('Payments')
    console.log(body)
    // Send a 200 response to indicate success
    res.sendStatus(200);
});

module.exports = router;
