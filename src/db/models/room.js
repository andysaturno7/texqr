"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Room extends Model {
    static associate(models) {
      Room.belongsToMany(models.Registrant, { through: "Room_Registrants" });
      Room.hasMany(models.Asistance);
      Room.hasMany(Room, {
        as: "childRoom",
        foreignKey: "parentRoom",
      });
    }
  }

  Room.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      useDefaultRegistrants: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      useAllRegistrants: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isDefaultRoom: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Room",
    }
  );

  return Room;
};
