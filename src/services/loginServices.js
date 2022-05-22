const jwt = require('jsonwebtoken');
require('dotenv').config();
const status = require('../status');
const { jwtConfig } = require('../status');
const { User } = require('../database/models');

const loginServices = async (email, password) => {
const user = await User.findOne({ where: email });

if (!user || user.password !== password) throw status.ivalidField;

const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);

return token;
};

module.exports = {
loginServices,
};