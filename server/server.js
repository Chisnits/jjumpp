const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const FacebookStrategy = require('passport-facebook');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())

app.use(session({
  secret: '1234567',
  resave: true,
  saveUninitialized: false
}));



passport.serializeUser(function(user, done) {
  //take in login information and store it on the session
  //passed in by passport strategy
  done(null, user);
})

passport.deserializeUser(function(user, done) {
  //database lookup(user)
  done(null, user); //becomes req.user
})

const userCtrl = require('./userCtrl');

app.get('/me', userCtrl.me);




app.listen(5000, function() {
  console.log('Listening on 5000');
});