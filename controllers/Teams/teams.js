const User = require("../../models/User/User");
const Team = require("../../models/Teams/Teams");
const TeamOwner = require("../../models/Teams/TeamOwner");
const connectDB = require("../../config/mongoConfig");

// create team
const createTeam = async (req, res) => {
  // await connectDB();
  await connectDB();

  const { name, description, owner } = req.body;
  try {
    // get user email from auth middleware
    const email = req.oidc.user.email;
    console.log(email);

    // create team owner email from user model
    const teamOwner = await User.findOne({ email });
    if (!teamOwner) {
      return res.status(404).json({ error: "User not found" });
    }
    // create team
    const team = await Team.create({
      Team_name: name,
      Team_description: description,
      Team_admin: teamOwner.email,
      owner: teamOwner.email,
    });

    // save created team
    await team.save();
    // res.status(201).json({ team });
    console.log("team created");

    try {
      console.log(email);

      // add the created teeam to list of teams by the team owner
      const teamOwner = await TeamOwner.findOne({ Team_owner: email });
      if (!teamOwner) {
        return res.status(404).json({ error: "Team owner not found" });
      }
      if (!teamOwner.Teams) {
        teamOwner.Teams = []; // Initialize Teams array if it doesn't exist
      }
      teamOwner.Teams.push(
        team,
        // add description and team name to team owner model
        (teamOwner.Team_description = description),
        (teamOwner.Team_name = name)
      );
      await teamOwner.save();
      res.status(201).json({ teamOwner });
      console.log("team owner created");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// export controllers
module.exports = {
  createTeam,
};
