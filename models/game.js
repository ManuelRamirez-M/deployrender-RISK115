const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Game extends Model {
        static associate(models) {
            Game.hasMany(models.Player, {
              foreignKey: 'id',
            });
            Game.hasMany(models.Territory, {
              foreignKey: 'id',
            });
            Game.hasMany(models.Turn, {
              foreignKey: 'id',
            });
          }
    }
    Game.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      player1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      player2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      current_turn: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Game',
    });
    return Game;
  };