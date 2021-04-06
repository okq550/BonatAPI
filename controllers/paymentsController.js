const validator = require("../helpers/validator");
const paymentsRepository = require("../repositories/paymentsRepository");

exports.savePayment = async function (req, res, next) {
  // Validate request parameters, queries using express-validator
  //   const body = JSON.stringify(req.body);
  const payload = req.body;
  
  if (! await validator.validateSignature(req)){
    return res.status(400).json({ status: 400, message: "Signature mismatch" });
  }

  try {
    var eventType = payload.type.split(".")[1].toUpperCase();
    var createdPayment = await paymentsRepository.createPayment(
      eventType,
      payload
    );
    return res.status(200).json({
      status: 200,
      data: createdPayment,
      message: "Succesfully Payment Record Created",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getAllPayments = async function (req, res, next) {
  // Validate request parameters, queries using express-validator
  console.log("paymentsController");
  res.send("respond with a paymentsController");

  var page = req.params.page ? req.params.page : 1;
  var limit = req.params.limit ? req.params.limit : 10;
  try {
    var users = await UserService.getUsers({}, page, limit);
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};