// Email collaboration Teams models

// Load required packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define our Team schema
const TeamSchema = new Schema({
  Team_name: { type: String, required: true },
  Team_members: { type: Array, required: false },
  Team_admin: { type: String, required: false },
  Team_description: { type: String, required: true },
  Team_created: { type: Date, default: Date.now },
  Team_updated: { type: Date, default: Date.now },
  owner: { type: String, required: true },
});

// Export the Mongoose model
const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;
