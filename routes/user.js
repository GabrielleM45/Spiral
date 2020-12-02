const express = require("express");
const { userById, allUsers, getUser, updateUser, deleteUser, userPhoto, addFollowing, addFollower, removeFollowing, removeFollower } = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.put("/user/follow", requireSignin, addFollowing, addFollower )
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower )

router.get("/users", allUsers);
router.get("/user/:userId", requireSignin, getUser);
router.put("/user/:userId", requireSignin, updateUser);
router.delete("/user/:userId", requireSignin, deleteUser);
// Photo route
router.get("/user/photo/:userId", userPhoto);

// Any route containing :userId, app with first execute userByID()
router.param("userId", userById);

module.exports = router;
