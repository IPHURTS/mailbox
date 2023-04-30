const express = require('express');
const dotenv = require('dotenv');
const {auth, config} = require('./config/auth0Config');
dotenv.config();

const PORT = process.env.PORT ;

const app = express();

// Load env vars


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// static folder
app.use(express.static('./jodoo/public/'));


// auth0
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// Routes
app.use('/', require('./routes/index'));
app.use("/auth", require("./routes/auth"));
app.use('/teams', require('./routes/teams'));
app.use('/waitlist', require('./routes/waitlist'));


app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); 
});
