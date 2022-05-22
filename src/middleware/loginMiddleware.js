const status = require('../status');

const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(status.requiredField);

  next();
};

module.exports = loginMiddleware;