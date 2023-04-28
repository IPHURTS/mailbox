const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our Team owner schema
const TeamOwnerSchema = new Schema({
    Team_name: { type: String, required: true },
    Team_owner: { type: String, required: true },
    Team_description: { type: String, required: true },
    Team_created: { type: Date, default: Date.now },
    Team_updated: { type: Date, default: Date.now }

});


// Export the Mongoose model
const TeamOwner = mongoose.model('TeamOwner', TeamOwnerSchema);
module.exports = TeamOwner;
