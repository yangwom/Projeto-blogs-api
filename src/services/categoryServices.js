const { Category } = require('../database/models');

const create = async (name) => {
  const data = await Category.create({ name });

  return {
    id: data.null,
    name: data.name,
  };
};

module.exports = {
  create,
};