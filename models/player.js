const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Player extends Model {
        static associate(models) {
            Player.belongsTo(models.Game, {
              foreignKey: 'gameId',
            });
            Player.belongsTo(models.User, {
              foreignKey: 'userId',
            });
            Player.hasMany(models.Territory, {
              foreignKey: 'id',
            });
            Player.hasMany(models.Turn, {
              foreignKey: 'id',
            });
          }
    }
    Player.init({
        gameId: {
          type: DataTypes.INTEGER,
        },
        userId: {
          type: DataTypes.INTEGER,
        },
        username: {
          type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          status: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          turnSoldiers: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          number_of_territories: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          iron: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          wheat: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          oil: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }, {
      sequelize,
      modelName: 'Player',
    });
    return Player;
  };