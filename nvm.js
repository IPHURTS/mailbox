
  // old email is the email that is returned from the auth0 provider
  const oldemail = req.oidc.user.email;

  // db email is the email that is saved in the mongodb database
  const oldUser = await User.findOne({ email: oldemail });

  if (oldUser) {
    res.json(oldUser);
  } else {
    // await connectDB();
    await connectDB();
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
;

// if user does not exist, save user to database
