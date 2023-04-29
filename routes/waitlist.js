const router = require('express').Router();
const dotenv = require('dotenv');
const Waitlist = require('../models/waitlist/waitlist');

// db
const connectDB = require('../config/mongoConfig');

dotenv.config();

// declaring routes
router.get('/', async (req, res) => {
    res.render('waitlist');
});

router.post('/', async (req, res) => {
    // get email from reg.body through waitlist form in index.ejs
    const {email} = req.body;
    console.log(email);

    // connect to db
    await connectDB();
    console.log('connected to db');

    // create new waitlist object
    const newWaitlist = new Waitlist({
        email: email,
        status: 'pending',
        date: Date.now()
    });

    // save new waitlist object to db
    try {
        await newWaitlist.save();
        console.log('saved to db');
        console.log("now redirecting to '/'");
        res.redirect('/');
    }
    catch (err) {
        console.log(err);
        res.redirect('/');
    }

        
   



});
   







// exporting router
module.exports = router;