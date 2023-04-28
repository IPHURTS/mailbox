// user model
const User = require("../models/User/User");
// mongodb connection
const connectDB = require("../config/mongoConfig");

// auth function that  registers users using the auth0 provider,  and saves the user to mongodb database
const register = async (req, res) => {
  const {
    name,
    email,
    picture,
    given_name,
    family_name,
    nickname,
    locale,
    email_verified,
    sub,
    updated_at,
    sid,
  } = req.oidc.user;

  //  check if user exists in database
try{
    await connectDB();
    const userExists = await User.findOne({ email: email });
    if (userExists) {
        res.send("old user");
        }
    else {
        
        const user = new User({
        name,
        email,
        picture,
        given_name,
        family_name,
        nickname,
        locale,
        email_verified,
        sub,
        updated_at,
        sid,
        });
        await user
        .save()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
    }

}
catch(err){
    res.status(500).json({ message: err.message });
}
};

// exporting auth function
module.exports = {
  register,
};
