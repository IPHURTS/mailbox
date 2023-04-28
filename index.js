const express = require('express');
const dotenv = require('dotenv');
const {auth, config} = require('./config/auth0Config');

const PORT = process.env.PORT || 3000;

const app = express();

// Load env vars
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// auth0
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// Routes
app.use('/', require('./routes/index'));
app.use("/auth", require("./routes/auth"));
app.use('/teams', require('./routes/teams'));


app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); 
});
