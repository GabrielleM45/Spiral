const express = require("express");
const { signup, signin, signout, forgotPassword, resetPassword, socialLogin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { userSignupValidator, passwordResetValidator } = require("../validator");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

// Password reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// Social Login route
router.post("/social-login", socialLogin);

// Any route containing :userId, app with first execute userByID()
router.param("userId", userById);

module.exports = router;
