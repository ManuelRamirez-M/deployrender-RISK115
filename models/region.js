const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Region extends Model {
        static associate(models) {

            }
    }
    Region.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          resource: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          resourceamount: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    }, {
      sequelize,
      modelName: 'Region',
      timestamps: false, 
    });
    return Region;
  };