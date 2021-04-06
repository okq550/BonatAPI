const crypto = require("crypto");

exports.validateSignature = async function (req) {
  // Validate request parameters, queries using express-validator
  const signature = req.header("x-square-signature");
  const body = JSON.stringify(req.body);
  const url = process.env.WEBHOOK_URL;

  // Concatenate your notification URL and
  // the JSON body of the webhook notification
  const combined = url + body;
  const signatureKey = process.env.SIGNATURE_KEY;

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
    return true;
  } else {
    return false;
  }
};
