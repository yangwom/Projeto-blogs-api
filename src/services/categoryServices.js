const { Category } = require('../database/models');

const create = async (name) => {
  const data = await Category.create({ name });

  return data;
};

const getAll = async () => {
const data = await Category.findAll();
return data;
};

module.exports = {
  create,
  getAll,
};