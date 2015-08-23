var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/input', function(req, res, next){
	res.render('input');
})

/*router.put('/input/submit', function(req, res, next){

	console.log("req", req);
	res.json(req.params);
})*/

router.post('http://localhost:3000/input?firstName=Cooper&lastName=The+Hacker&email=cooper%40hackerdogs.com&password=hacker&photo=http%3A%2F%2Fpetdiys.com%2Fwp-content%2Fuploads%2F2014%2F03%2FDIY-Dog-Bandit-Mask.jpg&isAdmin=true', function(req, res, next){	
	res.json(req.query);
})

router.get('/contact', function(req, res, next){
	res.render('contact');
})

/*router.post('http://localhost:1337/api/account', function(req, res, next){
	res.json()
})

router.post('http://localhost:1337/api/account', function(req, res, next){
	res.json()
})*/

module.exports = router;
