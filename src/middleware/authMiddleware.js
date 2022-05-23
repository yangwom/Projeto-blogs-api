const jwt = require('jsonwebtoken');
const status = require('../status');
const { User } = require('../database/models');

const authMiddleware = async (req, res, next) => {
const { authorization: token } = req.headers; 

if (!token) return next(status.tokenNotValid);

const decoded = jwt.verify(token, process.env.JWT_SECRET);

const user = await User.findOne({ where: { email: decoded.data.email } });

if (!user) return next(status.tokenExpiresIn);
req.user = user;

next();
};

module.exports = {
authMiddleware,
};
