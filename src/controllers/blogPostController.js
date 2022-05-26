const services = require('../services/blogPost');
const status = require('../status');

const create = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  try {
    const data = await services.create(title, content, user.id, categoryIds);
    return res.status(status.created).json(data);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const data = await services.getAll();
    return res.status(status.success).json(data);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await services.getById(id);
    return res.status(status.success).json(data);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;

  const { title, content } = req.body;

  const { user } = req;

  try {
    const data = await services.update(id, title, content, user.id);
    return res.status(status.success).json(data);
  } catch (err) {
    next(err);
  }
};

const deleted = async (req, res, next) => {
  const { id } = req.params;

   const { user } = req;

try {
const data = await services.deleted(id, user.id);
return res.status(status.noContent).json(data);
} catch (err) {
next(err);
}
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleted,
};