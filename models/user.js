const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class User extends Model {
      static associate(models) {
        User.hasMany(models.Player, {
          foreignKey: 'id',
        });
      }
    }
    User.init({
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'User',
    });
    return User;
  };