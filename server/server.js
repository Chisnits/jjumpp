const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const FacebookStrategy = require('passport-facebook');
const config = require('./config');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())

app.use(session(config.mySecret));

passport.use(new FacebookStrategy(config.authPass, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken, refreshToken, profile);
  console.log('HERE', profile.name.givenName, profile.name.familyName, profile.nickname, profile.emails[0].value, profile._json.picture_large)
  done(null, profile);
}));


app.route('/')
  .get(passport.authenticate('facebook', { scope: ['email']}));

app.route('/auth/facebook/callback')
  .get(passport.authenticate('facebook', function(err, user, info) {
    console.log(err, user, info)
  }))

app.listen(5000, function() {
  console.log('Listening on 5000');
});