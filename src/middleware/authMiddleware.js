const jwt = require('jsonwebtoken');
const status = require('../status');
const { User } = require('../database/models');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return next(status.tokenNotValid);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findOne({ where: { email: decoded.data.email } });

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
