// Team members models

// Load required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our TeamMember schema
const TeamMemberSchema = new Schema({
    TeamMember_name: { type: String, required: true },
    TeamMember_email: { type: String, required: true },
    TeamMember_created: { type: Date, default: Date.now },
    TeamMember_updated: { type: Date, default: Date.now },
    is_admin: { type: Boolean, default: false }
   
    
});

// Export the Mongoose model
const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);
module.exports = TeamMember;