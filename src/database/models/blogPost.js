const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
        type: DataTypes.STRING,
        primaryKey: DataTypes.INTEGER,
        foreignKey: true
        },
        published: DataTypes.STRING,
        updated: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'BlogPosts',
    });

    BlogPost.associate = (models) => {
       BlogPost.belongsTo(models.User,
          { foreignKey: 'userId', as: 'users' });
      };
    

    return BlogPost;
};

module.exports = BlogPost;