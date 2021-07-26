const { Asistance } = require("../../db/index");

module.exports = (io) => {
  const _asistance = require("../../db/functions/asistance")(io);
  return {
    async getAll(req, res) {
      try {
        let asistanceTable = await _asistance.getAll();
        return res.status(200).send(asistanceTable);
      } catch (error) {
        return res.send({ name: error.name, message: error.message });
      }
    },

    async addOne(req, res, next) {
      var { RegistrantId, RoomId } = req.body;
      try {
        let created = await Asistance.create({ RegistrantId, RoomId });
        return res.status(200).send(created);
      } catch (error) {
        next(error);
      }
    },

    async getLast(req, res, next) {
      let id = req.params.id;
      try {
        let last = await _asistance.getLastByRegistrant(id);
        return res.send(last);
      } catch (error) {
        next(error);
      }
    },

    async join(req, res, next) {
      try {
        if (!req.body.id || !req.body.RoomId) {
          throw new Error("No has proporcionado los datos correctos.");
        }
        let joined = await _asistance.join(req.body);
        return res.status(200).send(joined);
      } catch (error) {
        next(error);
      }
    },

    async leave(req, res, next) {
      try {
        if (!req.body.RegistrantId) {
          throw new Error("No se han proporcionado datos correctos.");
        }
        let leaved = await _asistance.leave(req.body.RegistrantId);
        return res.status(200).send(leaved);
      } catch (error) {
        next(error);
      }
    },

    async getDataCount(req, res, next) {
      try {
        let data = await _asistance.data();
        return res.status(200).send(data);
      } catch (error) {
        next(error);
      }
    },
  };
};
