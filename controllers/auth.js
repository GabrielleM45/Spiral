const jwt = require("jsonwebtoken");
require("dotenv").config();
const expressJwt = require("express-jwt");
const User = require("../models/user");
const _ = require("lodash");
const { sendEmail } = require("../helpers");
const dotenv = require("dotenv");
dotenv.config();

exports.signup = async (req, res) => {
  // Check if user already exists
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    // Unauthorized status
    return res.status(403).json({
      error: "Email is already in use!",
    });
  const user = await new User(req.body);
  await user.save();
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
  res.clearCookie("t");
  return res.json({ message: "You have successfully signed out." });
};

// Require user to be signed in to access certain routes
exports.requireSignin = expressJwt({
  // If token is valid, express-jwt appends verified user ID
  secret: process.env.JWT_SECRET,
  algorithms: ["sha1", "RS256", "HS256"],
  userProperty: "auth",
});

// Forgot password and reset password methods

exports.forgotPassword = (req, res) => {
  if (!req.body) return res.status(400).json({ message: "No request body" });
  if (!req.body.emal)
    return res.status(400).json({ message: "No request body " });

  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user)
      return res.status(401).json({
        error: "No account with given email.",
      });

    const token = jwt.sign(
      { _id: user._id, iss: "NODEAPI" },
      process.env.JWT_SECRET
    );
    // Email info
    const emailInfo = {
      from: "noreply@node-react.com",
      to: email,
      subject: "Password Reset Information",
      text: `Please use the following link to reset your password: ${proccess.env.CLIENT_URL}/reset-password/${token}`,
      html: `<p>Please use the following link to reset your password: </p> <p>${process.env.CLIENT_URL}/reset-password/${token}</p>`,
    };
    return user.updateOne({ resetPasswordLink: token }, (err, success) => {
      if (err) {
        return res.json({ message: err });
      } else {
        sendEmail(emailData);
        return res.status(200).json({
          message: `Email has been sent to ${email}. Please follow the instructions to reset your password.`,
        });
      }
    });
  });
};

exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;
  User.findOne({ resetPasswordLink }, (err, user) => {
    if (err || !user) return res.status(401).json({ error: "Invalid link." });
    const updatedFields = {
      password: newPassword,
      resetPasswordLink: "",
    };
    user = _.extend(user, updatedFields);
    user.updated = Date.now();
    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        message: `Password reset. Please log in with your new password.`,
      });
    });
  });
};

exports.socialLogin = (req, res) => {
  let user = User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      // create a new user and login
      user = new User(req.body);
      req.profile = user;
      user.save();
      // generate a token with user ID and JWT_SECRET
      const token = jwt.sign(
        { _id: user._id, iss: "NODEAPI" },
        process.env.JWT_SECRET
      );
      res.cookie("t", token, { expire: new Date() + 9999 });
      // Return response with user & token to front end
      const { _id, name, email } = user;
      return res.json({ token, user: { _id, name, email } });
    } else {
      // update existing user with social login info and log in
      req.profile = user;
      user = _.extend(user, req.body);
      user.updated = Date.now();
      user.save();
      // Generate a token with user ID and JWT_SECRET
      const token = jwt.sign(
        { _id: user._id, iss: "NODEAPI " },
        proccess.env.JWT_SECRET
      );
      res.cookie("t", token, { expire: new Date() + 9999 });
      // Return response with user & token to front end
      const { _id, name, email } = user;
      return res.json({ token, user: { _id, name, email } });
    }
  });
};
