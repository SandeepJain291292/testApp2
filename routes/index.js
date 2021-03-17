var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.name = 'app2';
  req.session.city = 'appcity';
  res.setHeader('set-cookie', [
    'cookie1=value1; SameSite=Lax',
    'cookie2=value2; SameSite=None; Secure',
  ]);
  // localStorage.setItem('name', 'app2');
  // localStorage.setItem('city', 'app2city');
  res.render('index', { title: 'App2' });
  console.log('name--'+req.session);
  console.log('id--'+req.sessionID);
  console.log('name 1--'+req.session.name);
  console.log('name city--'+req.session.city);
  // console.log('name-ls-'+localStorage.getItem('name'));
  // console.log('name city-ls-'+localStorage.getItem('city'));
});

router.get('/path',function(req, res, next){
  res.setHeader('set-cookie', [
    'cookie1=value1; SameSite=Lax',
    'cookie2=value2; SameSite=None; Secure',
  ]);
  console.log('name-2-'+req.session);
  console.log('id-2-'+req.sessionID);
  console.log('name 1-2-'+req.session.name);
  console.log('name city-2-'+req.session.city);
  // console.log('name-ls2-'+localStorage.getItem('name'));
  // console.log('name city-ls2-'+localStorage.getItem('city'));
});

module.exports = router;
