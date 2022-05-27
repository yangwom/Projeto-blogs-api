const jwt = require('jsonwebtoken');
const status = require('../status');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return next(status.tokenNotValid);

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    if (!user) return;
    
    req.user = user;
    next();
  } catch (err) {
    next(status.tokenExpiresIn);
  }
};

module.exports = {
  authMiddleware,
};
