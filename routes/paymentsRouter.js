var express = require("express");
var router = express.Router();
const paymentsController = require("../controllers/paymentsController");

// const { ApiError, Client, Environment } = require("square");

// const client = new Client({
//   timeout: 3000,
//   environment: Environment.Production, // `Environment.Sandbox` to access sandbox resources
//   accessToken:
//     "EAAAEeIfHSYp-sGu3Cygm8gCEmYJEe4DHnJOoJWOQFIr5zM4HleeR8FuCUdnMQ_8",
// });

/* Handle payments. */
router.get("/", paymentsController.getAllPayments);
router.post("/", paymentsController.savePayment);

module.exports = router;
