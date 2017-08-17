const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'hbs');

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

const pirateController = require('./controller/pirates');
app.use('/pirates', pirateController);





const port = process.env.PORT || 3000
app.listen(port, function() {
    console.info('Server up and running on port ' + port);
})