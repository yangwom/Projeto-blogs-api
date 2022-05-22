const services = require('../services/userServices');
const status = require('../status');

const userCreated = async (req, res, next) => {
  const { display, email, password, image } = req.body;
  try {
    const data = await services.userIsValid(display, email, password, image);
    return res.status(status.created).json({ token: data });
  } catch (err) {
    next(err);
  }
};

module.exports = {
userCreated,
};