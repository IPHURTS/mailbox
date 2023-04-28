// declaring router from express
const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
const auth = require('../controllers/authController')

// declaring routes
router.get('/', (req, res) => {
    res.send('Hello Auth!');
});

router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user)
    
    );
  });

  // register route for users
router.get('/register',requiresAuth(), auth.register);






// exporting router
module.exports = router;