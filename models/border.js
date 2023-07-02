const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Border extends Model {
      static associate(models) {
      }
    }
    Border.init({
      territory1_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      neighboring2_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Border',
      timestamps: false, 
    });
    return Border;
  };