const express = require("express");
const { userById, allUsers, getUser, updateUser, deleteUser, userPhoto, addFollowing, addFollower, removeFollowing, removeFollower, findPeople } = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.put("/user/follow", requireSignin, addFollowing, addFollower )
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower )

router.get("/api/users", allUsers);
router.get("/api/user/:userId", requireSignin, getUser);
router.put("/user/:userId", requireSignin, updateUser);
router.delete("/user/:userId", requireSignin, deleteUser);
// Photo route
router.get("/user/photo/:userId", userPhoto);

// Who to follow route
router.get("/user/findpeople/:userId", requireSignin, findPeople )


// Any route containing :userId, app with first execute userByID()
router.param("userId", userById);

module.exports = router;
