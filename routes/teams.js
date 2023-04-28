// router 
const router = require('express').Router();

// controllers
const teams = require('../controllers/teams');

router.get('/', (req, res) => {
    res.send('Teams route');
});

// router.post('/create',teams.createTeam);


// export router
module.exports = router;