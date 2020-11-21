const express = require("express");
const { getPosts, createPost, postsByUser, postById, isPoster, deletePost } = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");

const router = express.Router()

router.get("/", getPosts);
router.post("/post/new/:userId", requireSignin, createPost, createPostValidator);
router.get("/posts/by/:userId", requireSignin, postsByUser)
router.delete("/post/:postId", requireSignin, isPoster, deletePost)

// Any route containing :userId, App will first execute userById()
router.param("userId", userById);
// Any route containing :postId, App will first execute postById()
router.param("postId", postById);

module.exports = router;

