const _ = require("lodash");
const User = require("../models/user");
const formidable = require("formidable");
const fs = require("fs");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found.",
      });
    }
    // Adds profile object in request with user info.
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
    res.json(users);
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

// Update user information
// exports.updateUser = (req, res, next) => {
//   let user = req.profile;
//   // Changes the source object to allow for updating.
//   user = _.extend(user, req.body);
//   user.updated = Date.now();
//   user.save((err) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Unauthorized.",
//       });
//     }
//     // Hide hashed password and salt
//     user.hashed_password = undefined;
//     user.salt = undefined;
//     res.json({ user });
//   });
// };
exports.updateUser = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }
    // Save user
    let user = req.profile;
    user = _.extend(user, fields);
    user.updated = Date.now();

    if (files.photo) {
      user.photo.data = fs.readFileSync(files.photo.path);
      user.photo.contentType = files.photo.type;
    }

    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    });
  });
};

exports.userPhoto = (req, res, next) => {
  if (req.profile.photo.data) {
    res.set("Content-Type", req.profile.photo.contentType);
    return res.send(req.profile.photo.data);
  }
  next();
};

// Delete user profile
exports.deleteUser = (req, res, next) => {
  let user = req.profile;
  user.remove((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({ message: "User deleted." });
  });
};
