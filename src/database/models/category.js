const Categorie = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  return Categorie;
};

module.exports = Categorie;