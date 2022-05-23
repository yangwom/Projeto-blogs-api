const status = require('../status');

const nameMiddleware = async (req, res, next) => {
const { name } = req.body;

 if (!name) return next(status.nameRequired);

 next();
};

module.exports = nameMiddleware;