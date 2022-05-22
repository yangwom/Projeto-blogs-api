const services = require('../services/loginServices');
const status = require('../status');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const data = await services.loginServices(email, password);
    return res.status(status.success).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
