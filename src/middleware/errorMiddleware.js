const status = require('../status');

const errorMiddleware = (err, req, res, _next) => {
if (err.status) return res.status(err.status).json({ message: err.message });
return res.status(status.internalServerError).json({ message: err.message });
};

module.exports = errorMiddleware;