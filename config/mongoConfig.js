const mongoose = require('mongoose');
require('dotenv').config();


// connection to mongodb Cloud atlas via mongoose
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // options to avoid warnings in console
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB;
