const { Asistance, Registrant, Room } = require("../index");
const registrants = require("./registrants");
const _regis = require("./registrants");

module.exports = (io) => {
  return {
    async getAll() {
      try {
        let asistanceTable = await Asistance.findAll({
          include: [
            { model: Registrant, attributes: { exclude: ["id"] } },
            { model: Room, attributes: { exclude: ["id"] } },
          ],
        });
        return JSON.parse(JSON.stringify(asistanceTable));
      } catch (error) {
        return error;
      }
    },

    async addOne(ob) {
      try {
        return await Asistance.create(ob);
      } catch (error) {
        throw error;
      }
    },

    async getLastByRegistrant(RegistrantId) {
      try {
        return await Asistance.findAll({
          limit: 1,
          where: { RegistrantId },
          order: [["joinTime", "DESC"]],
        });
      } catch (error) {
        throw error;
      }
    },

    async join(params) {
      let { RegistrantId, RoomId } = params;
      let lastAsistance = await this.getLastByRegistrant(params.RegistrantId);
      if (lastAsistance.length > 0 && lastAsistance[0].leaveTime == null) {
        throw new Error("El registro ya está dado de alta.");
      }
      try {
        let created = await Asistance.create({ RegistrantId, RoomId });
        let data = await this.data();
        io.emit("updated_asistance", data);
        let registrants = await _regis().getAll();
        io.emit("updated_registrant", registrants);
        return created;
      } catch (error) {
        throw error;
      }
    },

    async leave(registrantId) {
      let lastAsistance = await this.getLastByRegistrant(registrantId);
      if (lastAsistance.length == 0) {
        throw new Error("No hay registro dado de alta.");
      }
      if (lastAsistance[0].leaveTime != null && lastAsistance.length > 0) {
        throw new Error("El registro esta dado de baja.");
      }
      let leaveTime = new Date();
      try {
        let leaved = await Asistance.update(
          { leaveTime },
          { where: { id: lastAsistance[0].id } }
        );
        let data = await this.data();
        io.emit("updated_asistance", data);
        let registrants = await _regis().getAll();
        io.emit("updated_registrant", registrants);
        return leaved;
      } catch (error) {
        throw error;
      }
    },

    async data() {
      let connected, total, asistance;
      try {
        connected = await Asistance.findAndCountAll({
          where: { leaveTime: null },
        });
        asistance = await Asistance.count({
          distinct: true,
          col: "RegistrantId",
        });
        total = await Registrant.count();
      } catch (error) {
        throw error;
      }
      return { connected, total, asistance };
    },

    async drop() {
      try {
        await Asistance.sync({ force: true });
        let data = await this.data();
        io.emit("updated_asistance", data);
        return true;
      } catch (error) {
        throw error;
      }
    },
  };
};
