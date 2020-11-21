exports.createPostValidator = (req, res, next) => {
  // Title
  req.check("title", "Write a title.").notEmpty();
  req.check("title", "Title must be between 4 to 150 characters.").isLength({
    min: 4,
    max: 150,
  });
  // Body
  req.check("body", "Write a body.").notEmpty();
  req.check("body", "Body must be between 4 to 2000 characters.").isLength({
    min: 4,
    max: 2000,
  });
  // Check for errors.
  const errors = req.validationErrors();
  // If error show the first one as they occur.
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  // Proceed to next middleware.
  next();
};

exports.userSignupValidator = (req, res, next) => {
  // Name is not null and between 4 - 10 characters in length.
  req.check("name", "Name is required").notEmpty();
  // Email is not null, valid and normalized (regular expressions).
  req
    .check("email", "Email must between and 3 to 32 characters.")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @.")
    .isLength({
      min: 4,
      max: 2000,
    });
  // Check for Password
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  // Check for errors.
  const errors = req.validationErrors();
  // If error show the first one as they occur.
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  // Proceed to next middleware.
  next();
};
