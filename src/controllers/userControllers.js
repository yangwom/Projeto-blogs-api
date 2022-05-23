const services = require('../services/userServices');
const status = require('../status');

const userCreated = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const data = await services.userIsValid(displayName, email, password, image);
    return res.status(status.created).json({ token: data });
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
const data = await services.getByid(id);
return res.status(status.success).json(data);
} catch (err) {
  next(err);
}
};

module.exports = {
  userCreated,
  getAll,
  getById,
};