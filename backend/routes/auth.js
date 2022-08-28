const router = require('express').Router();
const passport = require('passport');

// Redirect here (home page) after user logs in and is successfully authenticated.
// 'CLIENT_URL' is our React app
const CLIENT_URL = 'http://localhost:3000/';

// Successful redirect
router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,

      // You can also send your cookies
      // cookies: req.cookies
    });
  }
});

// Failure redirect
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

// Get client request
// If you use inputs to login, use a POST request
// but since here, we are clicking a button to log in with Google, we can use a GET request.
// 'scope' means that after logging in, we just get the user's 'profile' (id, username, profile image, etc.).
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

// GitHub
router.get('/github', passport.authenticate('github', { scope: ['profile'] }));

router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

module.exports = router;
