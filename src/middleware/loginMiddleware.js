const status = require('../status');

const loginMiddleware = (req, res, next) => {
const { email, password } = req.body;

if (!email || !password) return status.requiredField;
next();
};

module.exports = loginMiddleware;