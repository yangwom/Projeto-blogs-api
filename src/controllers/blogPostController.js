const services = require('../services/blogPost');
const status = require('../status');

module.exports = {
  
  async create(req, res, next) {
    const { title, content, categoryIds } = req.body;
    const { user } = req;
    try {
      const data = await services.create(title, content, user.data.id, categoryIds);
      return res.status(status.created).json(data);
    } catch (err) {
      next(err);
    }
  },

  async getAll(req, res, next) {
    try {
      const data = await services.getAll();
      return res.status(status.success).json(data);
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const data = await services.getById(id);
      return res.status(status.success).json(data);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    const { id } = req.params;

    const { user } = req;
    console.log(req.body);
    try {
      const data = await services.update(id, req.body, user);
      return res.status(status.success).json(data);
    } catch (err) {
      next(err);
    }
  },

  async deleted(req, res, next) {
    const { id } = req.params;

    const { user } = req;

    try {
      await services.deleted(id, user.data.id);
      return res.status(status.noContent).end();
    } catch (err) {
      next(err);
    }
  },
};

// tentando passar no delete
// module.exports = {
//   create,
//   getAll,
//   getById,
//   update,
//   deleted,
// };