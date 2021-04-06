const crypto = require("crypto");
const paymentsRepository = require("../repositories/paymentsRepository");

exports.savePayment = async function (req, res, next) {
  // Validate request parameters, queries using express-validator
  //   const body = JSON.stringify(req.body);
  const payload = req.body;
  const signature = req.header("x-square-signature");
  const body = req.body;
//   const url = req.url;
  const url = "https://bonat-api-73au3.ondigitalocean.app/payments/";

  // Concatenate your notification URL and
  // the JSON body of the webhook notification
  const combined = url + body;

  // Webhook subscription signature key defined in dev portal for app
  // webhook listener endpoint: https://webhook.site/my-listener-endpoint
  // Note: Signature key is truncated for illustration
  const signatureKey = "biJMlpVugIP3exPLmooOxw";

  // Generate the HMAC-SHA1 signature of the string
  // signed with your webhook signature key
  const hmac = crypto.createHmac("sha1", signatureKey);
  hmac.write(combined);
  hmac.end();
  const checkHash = hmac.read().toString("base64");

  // Compare HMAC-SHA1 signatures.
  console.log(checkHash + " === " + signature);

  if (checkHash === signature) {
    console.log("Validation success!");
  } else {
    console.log("Validation error.");
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

// exports.validateSignature = async function (req) {
//   // Validate request parameters, queries using express-validator
//   const signature = req.header("x-square-signature");
//   const body = req.body;
//   const url = req.url;
//   console.log(req);
// };
