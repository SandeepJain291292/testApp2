var createError = require('http-errors');
var cookieSession = require('cookie-session')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }));

app.use(session({ 
  secret: 'secret', 
  resave: true, 
  saveUninitialized: false, 
  httpOnly:false
  // cookie: {
  //   maxAge: 3600000000000,
  //   httpOnly: false,
  //   secure: true,
  //   SameSite: 'None'
  // }
})); //Session setup
// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  console.log('req.cookies--'+req.cookies);
  var cookie = req.cookies;
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: false });
    console.log('cookie created successfully');
  } else {
    // yes, cookie was already present 
    console.log('cookie exists', cookie);
  } 
  next(); // <-- important!
});
// app.use(session({
//   secret: 'GHFHSGAVNBA6735e673HJGDSHDJHasdasd',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: true, maxAge: 3600000, SameSite : 'None'}
// }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use((req, res, next) => {
//   let cookie = req.cookies['cookieName'];
//   if (cookie === undefined) {
//     cookie = req.cookies['cookieName-legacy']
//   }

//   // proceed to work with cookie
//   // ...

//   return next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
