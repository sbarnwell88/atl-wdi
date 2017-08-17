//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id/', function(req, res){
	const id = req.params.id;
	//grab the pirate by id
	var showPirate = pirates[req.params.id];
	res.render("pirates/show.hbs", {
		pirates: showPirate,
		id: id
	});
});



//==============================
// CREATE
//==============================
router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
    const showPirates = pirates[id];
	res.render("pirates/edit.hbs", {
		pirates: showPirates,
		id: id
	});
});

//==============================
// UPDATE
//==============================
router.put('/:id', (req, res) => {
	const id = req.params.id;
    const showPirates = pirates[id];
    showPirates.name = req.body.name;
	showPirates.birthplace = req.body.birthplace;
	showPirates.death_year = req.body.death_year;
	showPirates.base = req.body.base;
	showPirates.nickname = req.body.nickname;
	res.method = "GET";
    res.redirect(`/pirates/${id}`);
})

router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
    };
    pirates.push(newPirate);
    res.method = "GET";
    res.redirect('/pirates');
});

//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {
	pirates.splice(req.params.id, 1);
    res.method= 'GET';
	res.redirect('/pirates');
})

//==============================
// EXPORTS
//==============================

module.exports = router;
