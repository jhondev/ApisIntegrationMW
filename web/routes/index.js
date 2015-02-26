var express = require('express');
var router = express.Router();
var http = require("http");

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.get('/clientsWeb', function  (req, res) {
	var user;
	var options = {
		host: 'localhost',
		port: 3000,
		path: '/clients',
		method: 'GET'
	};

	var myReq = http.request(options, function(myRes)	{
		setTimeout(function  () {
			var output = '';

			myRes.on('data', function (chunk) {
				output += chunk;
			});

			myRes.on('end', function() {
				var user = JSON.parse(output);
				//res.status(200).send(user);
			});
		}, 10000);		
	});	

	myReq.end();
});

router.get('/clientsWeb2', function  (req, res) {
	var user;
	var options = {
		host: 'localhost',
		port: 3000,
		path: '/clients',
		method: 'GET'
	};

	var myReq = http.request(options, function(myRes)	{
		var output = '';

		myRes.on('data', function (chunk) {
			output += chunk;
		});

		myRes.on('end', function() {
			var user = JSON.parse(output);
			res.status(200).send(user);
		});
	});	

	myReq.end();
	
});

module.exports = router;
