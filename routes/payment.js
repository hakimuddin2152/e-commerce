var express = require('express');
var router = express.Router();
var braintree = require('braintree');
const bodyParser = require('body-parser');

router.route('/payment').post(function(req, res) {
  var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'bjsqhg5n6hnrnq5c',
    publicKey:    'cmx8khpq5dhsv9mk',
    privateKey:   '593d8bcf662bfdd4130bb15b642cd71c'
});
console.log(req.body)
  // Use the payment method nonce here
  var nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  var newTransaction = gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, function(error, result) {
      if (result) {
        res.send(result);
      } else {
        res.status(500).send(error);
      }
  });
});

module.exports = router;