const _ = require("lodash");
const User = require("../models/user");
const formidable = require("formidable");
const fs = require("fs");
const { response } = require("express");

exports.userById = (req, res, next, id) => {
  User.findById(id)
    // Populate followers and followed users
    .populate("following", "_id name")
    .populate("followers", "_id name")
    .exec((err, user) => {
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
    console.log(err)
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({ message: "User deleted." });
  });
};

// Follow/Unfollow
exports.addFollowing = (req, res, next) => {
  User.findByIdAndUpdate(
    req.body.userId,
    { $push: { following: req.body.followId } },
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      next();
    }
  );
};

exports.addFollower = (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    { $push: { followers: req.body.userId } },
    { new: true }
  )
    .populate("following", "_id name")
    .populate("followers", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      result.hashed_password = undefined;
      result.salt = undefined;
      res.json(result);
    });
};

exports.removeFollowing = (req, res, next) => {
  User.findByIdAndUpdate(
    req.body.userId,
    { $pull: { following: req.body.unfollowId } },
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      next();
    }
  );
};

exports.removeFollower = (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    { $pull: { followers: req.body.userId } },
    { new: true }
  )
    .populate("following", "_id name")
    .populate("followers", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      result.hashed_password = undefined;
      result.salt = undefined;
      res.json(result);
    });
};

exports.findPeople = (req, res) => {
  let following = req.profile.following;
  following.push(req.profile._id);
  User.find({ _id: { $nin: following } }, (err, users) => {
    if (err) {
      return res.status(400).json({});
    }
    res.json(users);
  }).select("name");
};
