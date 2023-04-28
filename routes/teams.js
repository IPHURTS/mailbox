// router 
const router = require('express').Router();
const teams = require('../controllers/Teams/teams')
const { requiresAuth } = require('express-openid-connect');


router.get('/',  requiresAuth(),(req, res) => {
    res.render('test');
});

// create team
router.post('/create', teams.createTeam);

// router.post('/create',teams.createTeam);


// export router
module.exports = router;