const services = require('../services/blogPost');
const status = require('../status');

const create = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  try {
    const data = await services.create(title, content, categoryIds);
     return res.status(status.success).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = create;