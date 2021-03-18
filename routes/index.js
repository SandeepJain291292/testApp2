var express = require('express');
var router = express.Router();
var cookies = require('browser-cookies');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.name = 'app2';
  req.session.city = 'appcity';
  req.session.i = 1;
  console.log('req.cookies[connect.sid]-----------'+req.session.i);
  console.log('req.cookies[connect.sid]-----------'+req.cookies['connect.sid']);
  // cookies.defaults.secure = true;
  // cookies.defaults.SameSite = 'None';
  res.setHeader('set-cookie', [
    `connect.sid=${req.sessionID}; SameSite=None: Secure`
  ]);
  //console.log('connect.sid--'+cookies.get('connect.sid'));
  // cookies.set('connect.sid', req.sessionID, {secure: true, SameSite='None'});
  localStorage.setItem('name', 'app2');
  localStorage.setItem('city', 'app2city');
  res.render('index', { title: 'App2' });
  console.log('name--'+req.session);
  console.log('id--'+req.sessionID);
  console.log('name 1--'+req.session.name);
  console.log('name city--'+req.session.city);
  //res.sendStatus(200);
  // console.log('name-ls-'+localStorage.getItem('name'));
  // console.log('name city-ls-'+localStorage.getItem('city'));
});

router.get('/path',function(req, res, next){
  // res.setHeader('set-cookie', [
  //   'cookie1=value1; SameSite=Lax',
  //   'cookie2=value2; SameSite=None; Secure',
  // ]);
  console.log('name-2-'+req.session);
  console.log('id-2-'+req.sessionID);
  console.log('name 1-2-'+req.session.name);
  console.log('name city-2-'+req.session.city);
  console.log('name-ls2-'+localStorage.getItem('name'));
  console.log('name city-ls2-'+localStorage.getItem('city'));
});

module.exports = router;
