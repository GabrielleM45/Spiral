const jwt = require("jsonwebtoken");
require("dotenv").config();
const expressJwt = require('express-jwt');
const User = require("../models/user");

exports.signup = async (req, res) => {
  // Check if user already exists
  // console.log(req.body)
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
  // Unauthorized status
    return res.status(403).json({
      error: "Email is already in use!",
    });
  const user = await  User.create(req.body);
 
  res.status(200).json({ message: "Signup succesful! Please log in." });
};

exports.signin = (req, res) => {
  // Find user by email.
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    // If error, or no user.
    if (err || !user) {
      return res.status(401).json({
        error: "No account exists with this email.",
      });
    }
    // If user is found make sure email and password match.
    // Create authenticate method in model and use here.
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Incorrect email or password!",
      });
    }
    // Create a token with user id and secret.
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // Use token as 't' in cookie with expiry date.
    res.cookie("t", token, { expire: new Date() + 9999 });
    // Return response with user and token to frontend client.
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, email, name } });
  });
};

// Clearing cookie to sign user out.
exports.signout = (req, res) => {
    res.clearCookie("t")
    return res.json({message: "You have successfully signed out."});
};

// Require user to be signed in to access certain routes
exports.requireSignin = expressJwt({
  // If token is valid, express-jwt appends verified user ID
    secret: process.env.JWT_SECRET,
    algorithms: ["sha1", "RS256", "HS256"],
    userProperty: "auth"
});