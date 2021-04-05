exports.getAllPayments = (req, res, next) => {
  console.log("paymentsController");
  res.send("respond with a paymentsController");
};

exports.savePayment = (req, res, next) => {
  const signature = req.header("x-square-signature");
  console.log(signature);
  const body = JSON.stringify(req.body);
  console.log("PaymentsController");
  console.log(body);
  // Send a 200 response to indicate success
  res.sendStatus(200);
};
