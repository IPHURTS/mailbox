// user models 

// Load required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our User schema
const UserSchema = new Schema({ 
    name: String,
    email: String,
    picture: String,    
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    given_name: String,
    family_name: String,
    nickname: String,
    locale: String,
    email_verified: Boolean,
    sub: String,
    updated_at: String,
    sid: String

});

// Export the Mongoose model
const User = mongoose.model('User', UserSchema);
module.exports = User;
