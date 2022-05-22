const jwt = require('jsonwebtoken');
const status = require('../status');
const { User } = require('../database/models');
const jwtConfig = require('../jwtConfig/jwtConfig');

const userIsValid = async (email) => {
  const user = await User.findOne({ where: { email } });

  const exist = user.email === email;

  if (exist) throw status.errorConflict;

  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);

  return token;
};

module.exports = {
  userIsValid,
};