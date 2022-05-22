const jwt = require('jsonwebtoken');
const status = require('../status');
const { User } = require('../database/models');
const jwtConfig = require('../jwtConfig/jwtConfig');

const userIsValid = async (displayName, email, password, image) => {
  const exist = await User.findOne({ where: { email } });

  if (exist) throw status.errorConflict;

  await User.create({ displayName, email, password, image });

  const emailCreated = exist;
  
  const token = jwt.sign({ data: emailCreated }, process.env.JWT_SECRET, jwtConfig);

  return token;
};

module.exports = {
  userIsValid,
};