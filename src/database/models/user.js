const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'Users',
    });

    return User;
};

module.exports = User;