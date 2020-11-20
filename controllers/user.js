const _ = require("lodash");
const User = require("../models/user");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found.",
      });
    }
    // Add profile object in request with user info.
    req.profile = user;
    next();
  });
};

exports.hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile && req.auth && req.profile._id === req.auth._id;
  if (!authorized) {
    // No authroization status
    return res.status(403).json({
      error: "User not authorized.",
    });
  }
};

exports.allUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({ users });
    // hide salt and hashed password
  }).select("name email updated created");
};

// Return a single user
exports.getUser = (req, res) => {
  // hide hashed password and salt.
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.updateUser = (req, res, next) => {
  let user = req.profile;
  //extend - mutates the source object.
  user = _.extend(user, req.body);
  user.updated = Date.now();
  user.save((err) => {
    if (err) {
      return res.status(400).json({
        error: "Not authorized to perform this action.",
      });
    }
    // Hide hashed password and salt
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json({ user });
  });
};


exports.deleteUser = (req, res, next) => {
  let user = req.profile;
  user.remove((err, user) => {
    if(err) {
      return res.status(400).json({
        error: err
      })
    }
    res.json({ message: "User deleted successfully" });
  })
}