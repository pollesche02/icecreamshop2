module.exports = function(sequelize, DataTypes) {
    var Icecream = sequelize.define("Icecream", {
      icecream_flavor: {
        type: DataTypes.STRING,
      },
    
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Icecream;
  };