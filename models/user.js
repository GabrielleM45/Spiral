const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const crypto = require("crypto");
const {ObjectId} = mongoose.Schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
  photo: {
    data: Buffer,
    contentType: String
  },
  about: {
    type: String,
    trim: true
  },
  following: [{type: ObjectId, ref: "User"}],
  followers: [{type: ObjectId, ref: "User"}],
  
});

// Virtual field
userSchema
  .virtual("password")
  .set(function (password) {
    // Create a temporary variable called hashed_password
    this._password = password;
    // Generate a timestamp for salt
    this.salt = uuidv4();
    // Encrypt password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// Methods

userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },

  // Function to hash password
  encryptPassword: function (password) {
    if (!password) return "";
    try {

      // Crypto is a Nodejs module which doesn't require additional installation
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
        return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
