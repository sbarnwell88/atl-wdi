const express = require('express');
const hbs = require('hbs');

const app = express();
app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    // console.log(req.query);
    // console.log(req.route);
    // console.log(req.params);

    res.send('Hello World!!!');
});

app.get('/greeting', (req, res) => {
    // res.send('Hey, WDI 11!');
    //render the file called greeting
    res.render('greeting', {
      data: req.query.saying,
      name: req.query.firstName,
    });
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Jeni's almond butter brittle ice cream", 'Tacos from Superica', 'a breakfast sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in downtown Los Angeles', 'Pizza from Little Star in San Francisco'];
    
    res.render('favorite-foods', {
        data: favoriteFoods
    });
});

app.get('/rihanna', (req, res) => {
    res.send('Work work work work');
});

app.get('/:name', (req, res) => {
    console.log(req.query);
    console.log(req.route);
    console.log(req.params);

  if(req.query.human){
    res.send(`Hello, ${req.params.name}`);
  } else {
    res.send(`Hello, smart toaster`);
  }
})

app.get('/users/:user_id/friends/:friend_id', (req, res) => {
    res.send(`Hello User #:${req.params.user_id}. Your friend is User#: ${req.params.friend_id}`);
})

app.get('/foods/:food', (req, res) => {
    res.send(`I really love ${req.params.food}`);
})

// app.get('/sightings', (req, res) => {
//   console.log(req.query);
//   res.send(`How many ufo sightings do you think there are in state: ${req.query.state}? ${req.query.sights}`);
// });

// app.get('/add', (req, res) => {
//     let sum = parseInt(req.query.num1) + parseInt(req.query.num2);
//     res.send(`${sum}`);
// })

// app.get('/subtract', (req, res) => {
//     let subtract = parseInt(req.query.num1) - parseInt(req.query.num2);
//     res.send(`${subtract}`);
// })

// app.get('/multiply', (req, res) => {
//     let multiply = parseInt(req.query.num1) * parseInt(req.query.num2);
//     res.send(`${multiply}`);
// })

// app.get('/divide', (req, res) => {
//     let divide = parseInt(req.query.num1) / parseInt(req.query.num2);
//     res.send(`${divide}`);
// })

app.get('/math/:operator', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (req.params.operator === 'add') {
        var sum = parseInt(req.query.num1) + parseInt(req.query.num2);
        res.send(`${sum}`);
    } else if (req.params.operator === 'subtract') {
        var subtract = parseInt(req.query.num1) - parseInt(req.query.num2);
        res.send(`${subtract}`);
    } else if (req.params.operator === 'multiply') {
        var multiply = parseInt(req.query.num1) * parseInt(req.query.num2);
        res.send(`${multiply}`);
    } else if (req.params.operator === 'divide') {
        var divide = parseInt(req.query.num1) / parseInt(req.query.num2);
        res.send(`${divide}`);
    }
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('hello-express is running on port ' + port);
});