module.exports = {
  massiveConnection: {
    connectionString: '	postgres://uzlkhsye:UTmpZdik26BS5xXIl5hAUKx4Ddhge0NV@baasu.db.elephantsql.com:5432/uzlkhsye'
  },
    facebookAuthPass: {
       clientID:     '2049967101889588',
       clientSecret: '6f55bd11fbfa6abae95b43a67c47a74f',
       callbackURL: 'http://localhost:8080/auth/facebook/callback',
       profileFields: ['id', 'emails', 'name', 'displayName', 'gender']
     },
     twitterAuthPass: {
      consumerKey: 'pHDstBI7r388x0sZHSuGtsHIy',
      consumerSecret: 'sx2OtqYwWFznnlaeKhNtaXViD7Zz0WlVctIVcGeKCdlikP0XoH',
      callbackURL: "http://localhost:8080/auth/twitter/callback",
      accessToken: '905554025797492736-CTGV43QzeVOYhLgcykIkkloTlQdkgfo',
      tokenSecret: 'xQubvmpBsuKBPaZ31Xq187VuUqiYigBaOWVFeMmg3LWt4'
     },
     googleAuthPass: {
       clientID: '778850259775-f6san00shqrl6qco7hqbj7cbi0g7c62h.apps.googleusercontent.com',
       clientSecret: 'rLyQ-3UCtsEr0XHXXajTmUod',
       callbackURL: 'http://localhost:8080/auth/google/callback'
     },
     mySecret: {
       secret: "fhd#s8fjskljf*$937h)~fe"
     }
  }