const { Category } = require('../database/models');

const create = async (name) => {
  const data = await Category.create({ name });

  return {
    id: data.null,
    name: data.name,
  };
};

const getAll = async () => {
const data = await Category.findAll();
return data;
};

module.exports = {
  create,
  getAll,
};