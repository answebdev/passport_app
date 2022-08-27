const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['webdev'],

    // Calculate to one day
    maxAge: 24 * 60 * 60 * 100,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure CORS
// CORS allows us to make requests from any client server (e.g., React app)
app.use(
  cors({
    // Client server:
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    // Setting 'credentials' to 'true' allows us to send sessions through our client server requests
    credentials: true,
  })
);

// Authentication Methods (for Google, Facebook, GitHub) (from Passport docs, under 'Strategies' - see video around 44:31: https://www.youtube.com/watch?v=7K9kDrtc4S8 )
// Whenever we make a request to this URL ('/auth'),
// it's going to automatically call the 'authRoute' route (authentication route),
// and then, we'll be able to use its methods (in 'routes/auth.js').
app.use('/auth', authRoute);

app.listen('5000', () => {
  console.log('Server is running...');
});
