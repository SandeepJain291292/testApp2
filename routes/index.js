var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.name = 'app2';
  req.session.city = 'appcity';
  res.render('index', { title: 'App2' });
  console.log('name--'+req.session);
});

module.exports = router;
