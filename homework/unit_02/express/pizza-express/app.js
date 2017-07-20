const express = require('express');
const hbs = require('hbs');

const app = express();
app.set("view engine", "hbs");
// app.set('views', './views');

app.use(express.static(__dirname + '/public'));


var indexController = require('./controller/index_controller');
app.use('/', indexController);

var toppingController = require('./controller/topping_controller');
app.use('/topping', toppingController);

var orderController = require('./controller/order_controller');
app.use('/order', orderController);

app.get('*', (req, res) => {
    res.send('404 Page Not Found')
})



const port = 3000;
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

