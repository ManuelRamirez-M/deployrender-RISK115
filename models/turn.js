const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turn extends Model {
    static associate(models) {

      Turn.belongsTo(models.Game, {
        foreignKey: 'gameId',
      });
      Turn.belongsTo(models.Player, {
        foreignKey: 'playerId',
      });
    }
  }
  Turn.init({
      gameId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        playerId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        recruitedTroops: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        reinforced_territory: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        attacking_territory: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        attacked_territory: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        result_of_attack: {
          type: DataTypes.STRING,
          allowNull: false,
        },
  }, {
    sequelize,
    modelName: 'Turn',
  });
  return Turn;
};