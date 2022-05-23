const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },

        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
     },
        {
            tableName: 'PostCategories',
            timestamps: false,
        });

        PostCategory.associate = (models) => {
            models.BlogPost.belongsToMany(models.Category, {
              as: 'categories',
              through: PostCategory,
              foreignKey: 'postId',
              otherKey: 'categoryId',
            });
            models.Category.belongsToMany(models.BlogPost, {
              as: 'blogPosts',
              through: PostCategory,
              foreignKey: 'categoryId',
              otherKey: 'postId',
            });
          };


    return PostCategory;
};

module.exports = PostCategory;