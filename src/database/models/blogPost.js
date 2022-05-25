const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,

        userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
        },
        published: {
          type: DataTypes.DATE,
          defaultValue: new Date()
        }, 
        updated: {
           type: DataTypes.DATE,
           defaultValue: new Date(),
        } 
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