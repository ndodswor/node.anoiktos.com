/*------------
router.js
router for node express
defines page path actions
------------*/

var config = require("./config");
var functions = require("./functions");

//placeholder: writes the root
config.server.get('/', function(req, res) {
	console.log('got GET request for root');
	res.send('This is the root page!');
});

//handles guessMe's AJAX requests
config.server.post('/guessMeAJAX', function(req, res) {
	console.log("got POST request for guessMeAJAX");
	res.send(functions.guessMeAJAX(req.body.guess, req.session.answer));
});

//Writes the guessMe page; allows users to guess at a number set by the server on page load.
config.server.get('/guessMe', function(req, res) {
	console.log("got GET request for guessMe");
	//get a number between 1 and 100, save to session
	req.session.answer = Math.floor(Math.random() * 100) + 1;
	console.log("answer = " + req.session.answer);
	//print the page
	res.sendFile("innerHTML/guessMe.html", {"root":"XServer"});
});