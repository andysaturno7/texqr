const { Registrant } = require("../../db/index");
Error.prototype.code = 500;
module.exports = (io) => {
  const _regis = require("../../db/functions/registrants")(io);
  return {
    async getRegistrants(req, res) {
      let registrants = await _regis.getAll();
      if (registrants) {
        return res.status(200).send(registrants);
      } else {
        return res.status(404).send({
          message:
            "Ha ocurrido un error en el controlador mientras se obtenian los datos",
        });
      }
    },

    async getRegistrantByCode(req, res) {
      try {
        let registrant = await _regis.getByCode(req.params.code);
        return res.send(registrant);
      } catch (error) {
        res
          .status(error.code || 500)
          .send({ name: error.name, message: error.message });
      }
    },

    async addRegistrant(req, res) {
      let newRegister = await _regis.addOne(req.body);
      if (newRegister) {
        res.status(200).send(JSON.stringify(newRegister));
        return io.emit("new_user", JSON.stringify(newRegister));
      } else {
        return res.status(404).send({
          message:
            "Ha ocurrido un error en el controlador mientras se agregaban los datos",
        });
      }
    },

    async deleteRegistrant(req, res) {
      let args = !!req.params.id ? req.params.id : req.body;
      try {
        let deleted = _regis.delete(args);
        return res.status(200).send(deleted);
      } catch (error) {
        return res.status(500).send({ error: err.name, message: err.message });
      }
    },

    async dropRegistrants(req, res) {
      deletedTable = await _regis.dropTable();
      return res
        .status(200)
        .send({ message: "La tabla ha sido eliminada satisfactoriamente" });
    },
  };
};
