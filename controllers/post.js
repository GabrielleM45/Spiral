const Post = require("../models/post");
const formidable = require("formidable");
const fs = require("fs");

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .populate("postedBy", "_id name")
    .select("_id title body")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to upload image.",
      });
    }
    let post = new Post(fields);
    // Hide hashed password and salt.
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    post.postedBy = req.profile;
    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(result);
    });
  });
};

// Find posts by user
exports.postsByUser = (req, res) => {
  Post.find({postedBy: req.profile._id})
  .populate("postedBy", "_id name")
  .sort("_created")
  .exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json(posts);
  });
};