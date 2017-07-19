const express = require('express');

const app = express();

var indexController = require('./controller/index_controller');
app.use('/', indexController);

var toppingController = require('./controller/topping_controller');
app.use('/topping', toppingController);

var orderController = require('./controller/order_controller');
app.use('/order', orderController);



const port = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

