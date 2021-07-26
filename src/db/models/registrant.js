"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Registrant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Registrant.hasMany(models.Asistance);
      Registrant.belongsToMany(models.Room, { through: "Room_Registrants" });
    }
  }
  Registrant.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      code: {
        type: DataTypes.STRING,
        unique: true,
      },
      chair: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Registrant",
    }
  );
  return Registrant;
};
