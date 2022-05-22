const status = require('../status');

const displayMiddleware = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) return next(status.displayNameLength);

  next();
};

const emailMiddleware = (req, res, next) => {
  const { email } = req.body;

  const isValid = !email && !email.includes('@') && !email.includes('.com');

  if (!isValid) return next(status.emailNotValid);

  next();
};

const passwordMiddleware = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) return next(status.passwordLength);

  next();
};

module.exports = {
  displayMiddleware,
  emailMiddleware,
  passwordMiddleware,
};