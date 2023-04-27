// declaring router from express
const router = require('express').Router();

// declaring routes
// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });





// exporting router
module.exports = router;