var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/clients', function  (req, res) {
	var user = {
		name: 'nelson',
		last_name: 'jaramillo'
	};

	res.status(200).send(user);
});

module.exports = router;
