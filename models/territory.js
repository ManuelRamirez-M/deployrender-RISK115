const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Territory extends Model {
        static associate(models) {
        
              Territory.belongsTo(models.Game, {
                foreignKey: 'gameId',
              });
              Territory.belongsTo(models.Player, {
                foreignKey: 'currentOwner',
              });

            }
    }
    Territory.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          troops: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          resource: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          currentOwner: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }, {
      sequelize,
      modelName: 'Territory',
    });
    return Territory;
  };