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

const getAll = async () => {
const user = await User.findAll({
  attributes: { exclude: ['password'] },
});

return user;
};

const getByid = async (id) => {
  const data = await User.findByPk(id);

  if (!data) throw status.userNotFound;

  return data;
};

module.exports = {
  userIsValid,
  getAll,
  getByid,
};