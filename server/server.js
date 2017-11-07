const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Twitter = require('twitter');
const config = require('./config');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(session({
    secret: config.mySecret.secret,
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

//////////////Twitter 0Auth////////////
let twitterUser;
let twitterToken;
let twitterTokenSecret;
passport.use(new TwitterStrategy({
  consumerKey: config.twitterAuthPass.consumerKey,
  consumerSecret: config.twitterAuthPass.consumerSecret,
  callbackURL: config.twitterAuthPass.callbackURL
}, (token, tokenSecret, profile, done) => {
    twitterUser = profile.username;
    twitterToken = token;
    twitterTokenSecret = tokenSecret;
    return done(null, profile)
  }
))

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  const client = new Twitter({
    consumer_key: config.twitterAuthPass.consumerKey,
    consumer_secret: config.twitterAuthPass.consumerSecret,
    access_token_key: twitterToken,
    access_token_secret: twitterTokenSecret
  });

  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback',
  passport.authenticate('twitter', 
  { successRedirect: 'http://localhost:3000/chart',
    failureRedirect: 'http://localhost:3000/' 
  }));
//api/user runs as soon as the component mounts
//passing the twitter username into the component
  app.get('/api/user', (req, res)=>{
    if(twitterUser){
      res.status(200).send(twitterUser)
    } else res.status(404)
  })

//The params are passed directly through the axios
//request in the redux action. The params are the
//username of the twitter account.
  app.get('/api/twitterData/:screen_name', (req, res)=>{
    const params = {screen_name: req.params.screen_name}
    client.get('users/lookup', params, function(error, data, response) {
      if (!error) {
      }
      res.status(200).send(data[0])
    });
  })
  
//////////Facebook 0Auth////////////
  // let facebookUser;
  // let facebookToken;
  // passport.use(new FacebookStrategy(config.facebookAuthPass, (accessToken, refreshToken, profile, done) => {
  //   facebookUser = profile.displayName;
  //   facebookToken = accessToken;
  //   return done(null, profile)
  // }));

// app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));

// app.get('/auth/facebook/callback',
// passport.authenticate('facebook', 
// { successRedirect: 'http://localhost:3000/fbchart',
//   failureRedirect: 'http://localhost:3000/' 
// }));
// app.get('/api/fbuser', (req, res)=>{
//   if(facebookUser){
//     res.status(200).send(facebookUser)
//   } else res.status(404)
// })

let googleUser;
let googleToken;
let googleClientSecret;
passport.use(new GoogleStrategy({
  clientID: config.googleAuthPass.clientID,
  clientSecret: config.googleAuthPass.clientSecret,
  callbackURL: config.googleAuthPass.callbackURL
  },
  function(accessToken,refreshToken,profile, done){
    googleUser = profile.displayName;
    googleToken = accessToken;
    console.log(profile)
    return done(null, profile)
  }));
  passport.serializeUser(function(user, done){
    console.log('serializing', user);
    done(null, user);
  });
  passport.deserializeUser(function(id,done){
      done(err, user);
  });

///////Google Oauth endpoints////////
app.get('/api/googleuser', (req, res) => {
  if(googleUser){
    res.status(200).send(googleUser)
  } else res.status(404)
});

app.get('/logout',function(req,res){
  req.session.destroy(function(err,data){
  });
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback',
passport.authenticate('google', 
{ successRedirect: 'http://localhost:3000/googlechart',
  failureRedirect: 'http://localhost:3000/' 
}));

app.listen(8080, function() {
  console.log('Listening on 8080');
});