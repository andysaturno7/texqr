"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Asistance extends Model {
    static associate(models) {
      Asistance.belongsTo(models.Registrant);
      Asistance.belongsTo(models.Room);
    }
  }
  Asistance.init(
    {
      joinTime: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      leaveTime: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Asistance",
    }
  );
  return Asistance;
};
