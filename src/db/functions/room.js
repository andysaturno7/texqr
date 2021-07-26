const { Room, Registrant, Asistance } = require("../index");
Error.prototype.code = 500;
module.exports = (io) => {
  return {
    async getAll() {
      let rooms = await Room.findAll({
        include: [
          { model: Registrant },
          { model: Asistance },
          { model: Room, as: "childRoom" },
        ],
      });
      return JSON.parse(JSON.stringify(rooms));
    },

    getById(id) {
      try {
        return Room.findByPk(id);
      } catch (error) {
        throw error;
      }
    },

    addOne(room) {
      try {
        return Room.create(room);
      } catch (error) {
        throw error;
      }
    },

    remove(id) {
      return Room.destroy({ where: { id } });
    },

    update(room) {
      let id = room.id;
      return Room.update(room, { where: { id } });
    },

    setDefaultRoom() {
      Room.count().then((rooms) => {
        if (rooms == 0) {
          Room.create({
            name: "defaultRoom",
            capacity: 100,
            isDefaultRoom: true,
            useAllRegistrants: true,
          });
        }
      });
    },

    async replaceDefaultRoom(newDefaultId) {
      try {
        let defaultRoom = await Room.findOne({
          where: { isDefaultRoom: true },
        });
        if (defaultRoom.id == newDefaultId) {
          let error = new Error(
            "Estás tratando de asignar por defecto una sala que ya está por defecto"
          );
          error.name = "Error de sincronización";
          error.code = 400;
          throw error;
        } else {
          let newDefault = Room.update(
            { isDefaultRoom: true },
            { where: { id: newDefaultId } }
          );
          let oldDefault = Room.update(
            { isDefaultRoom: false },
            { where: { id: defaultRoom.id } }
          );
          return Promise.all(newDefault, oldDefault);
        }
      } catch (error) {
        throw error;
      }
    },
  };
};
