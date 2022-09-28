//create a routes
const express=require('express'); 
const router=express.Router(); 
const Razorpay = require('razorpay');

const instance =new Razorpay({
    key_id: 'rzp_test_6OAYahwbspMKp4',
    key_secret:'IPLKPxGUuJqlXUsQdfgJiZDD'
});

router.get('/', (req, res) => {
    var options = {
        amount: 50000,
        currency: 'INR',
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            console.log(err);
        } else {
            console.log(order); 
            //res.send(order.id);
            res.render('checkout', {amount: order.amount, order_id: order.id});
        }
    });
});

router.post('/pay-verify',(req,res) => {
    console.log(req.body);
    body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', 'IPLKPxGUuJqlXUsQdfgJiZDD')
                                    .update(body.toString())
                                    .digest('hex');
                                    console.log("sig"+req.body.razorpay_signature);
                                    console.log("sig"+expectedSignature);
    
    if(expectedSignature === req.body.razorpay_signature){
      console.log("Payment Success");
    }else{
      console.log("Payment Fail");
    }
  })

module.exports=router;