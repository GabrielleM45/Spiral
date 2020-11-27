const jwt = require("jsonwebtoken");
require("dotenv").config();
const expressJwt = require('express-jwt');
const User = require("../models/user");

exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    return res.status(403).json({
      error: "Email is already in use!",
    });
  const user = await new User(req.body);
  await user.save();
  res.status(200).json({ message: "Signup succesful! Please log in." });
};

exports.signin = (req, res) => {
  // Find the user based on email.
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    // If error, or no user.
    if (err || !user) {
      return res.status(401).json({
        error: "User with that email does not exist. Please sign in.",
      });
    }
    // If user is found make sure email and password match.
    // Create authenticate method in model and use here.
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match!",
      });
    }
    // Generate a token with user id and secret.
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // Persist the token as the 't' in cookie with expiry date.
    res.cookie("t", token, { expire: new Date() + 9999 });
    // Return response with user and token to frontend client.
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, email, name } });
  });
};

exports.signout = (req, res) => {
    res.clearCookie("t")
    return res.json({message: "You have successfully signed out."});
};

exports.requireSignin = expressJwt({
  // if the token is valid, expressJWT appends verified user ID
  // in an auth key to the request object.
    secret: process.env.JWT_SECRET,
    algorithms: ["sha1", "RS256", "HS256"],
    userProperty: "auth"
});