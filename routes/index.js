// declaring router from express
const router = require('express').Router();
const {admin} = require('../controllers/adminController')

// declaring routes
// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
    // send file in ../jodoo/public/index.html /workspaces/mailbox/jodoo/public/index.html
    // res.sendFile('/workspaces/mailbox/jodoo/public/index.html');
    res.render('index');

  });

  router.get('/admin', admin)
  





// exporting router
module.exports = router;