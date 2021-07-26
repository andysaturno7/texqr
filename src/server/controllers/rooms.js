const { Room } = require("../../db/index");
const _room = require("../../db/functions/room");

module.exports = (io) => {
  return {
    async getAll(req, res) {
      try {
        let rooms = await _room(io).getAll();
        return res.status(200).send(rooms);
      } catch (error) {
        return res
          .status(error.code || 500)
          .send({ error: error.name, message: error.message });
      }
    },

    async getById(req, res) {},

    async add(req, res) {
      try {
        let room = await _room(io).addOne(req.body);
        return res.status(200).send(room);
      } catch (error) {
        return res
          .status(error.code || 500)
          .send({ error: error.name, message: error.message });
      }
    },

    async delete(req, res) {},

    async bulkDelete(req, res) {},

    async update(req, res) {},

    async replaceDefault() {},

    async tests(req, res) {
      try {
        let parentRoom = await Room.findByPk(req.body.parentRoom);
        let childRoom = await Room.findByPk(req.body.id);
        let algo = await parentRoom.addChildRoom([childRoom]);
        return res.send(algo);
      } catch (error) {
        return res
          .status(500)
          .send({ error: error.name, message: error.message });
      }
    },
  };
};
