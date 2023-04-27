// declaring router from express
const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

// declaring routes
router.get('/', (req, res) => {
    res.send('Hello Auth!');
});

router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });






// exporting router
module.exports = router;