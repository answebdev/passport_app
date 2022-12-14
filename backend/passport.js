const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

// Put these in a .env file to keep them secret, especially if deploying application
const GOOGLE_CLIENT_ID =
  '671201144777-4lfaf8rqvsgsbhvbgcj3578aq8angb48.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const GITHUB_CLIENT_ID = 'a1ea8ca26e8fa47fcc7c';
const GITHUB_CLIENT_SECRET = '3399786ab3b3b690efec46d2cbf559560e38ea76';

// Google Authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      // 'profile' refers to user information: user id, user name, profile picture, etc.
      done(null, profile);
    }

    // If you use a database (e.g., MongoDB), use these lines:
    // function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }

    // If you use a database (e.g., MongoDB), use these lines:
    // function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }

    // This is an example of what it looks like if you use MongoDB (something like this)
    // function (accessToken, refreshToken, profile, cb) {
    //   const user = {
    //     username: profile.displayName,
    //     avatar: profile.photos[0],
    //   };
    //   // Save the user
    //   user.
    // }
  )
);

// GitHub Authentication
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// Since sessions are used in thie app, we need to serialize and de-serialize the user to pass our sessions.
// If you use sessions, you have to use these functions:
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
