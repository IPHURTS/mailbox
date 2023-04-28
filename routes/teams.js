// router 
const router = require('express').Router();
const team = require('../controllers/teams')

// controllers
const teams = require('../controllers/teams');

router.get('/', (req, res) => {
    res.send('Teams route');
});

// create team
router.post('/create',teams.createTeam);

// router.post('/create',teams.createTeam);


// export router
module.exports = router;