// declaring router from express
const router = require('express').Router();
const {admin} = require('../controllers/adminController')

// declaring routes
// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

  router.get('/admin', admin)
  





// exporting router
module.exports = router;