const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const waitlistSchema = new Schema({
    email: {
        type: String,
        required: true},
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending'
    }

});


const Waitlist = mongoose.model('Waitlist', waitlistSchema);

module.exports = Waitlist;