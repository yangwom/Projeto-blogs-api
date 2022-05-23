const status = require('../status');
const services = require('../services/categoryServices');

const create = async (req, res, next) => {
  const { name } = req.body;
  try {
    const data = await services.create(name);
    return res.status(status.created).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};