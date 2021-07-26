const {
  Registrant,
  Asistance,
  Room,
  sequelize,
  Sequelize,
} = require("../index");
const Op = Sequelize.Op;

Error.prototype.code = 500;

module.exports = (io) => {
  const controls = {
    async getAll() {
      try {
        let registrants = await Registrant.findAll({
          include: [{ model: Asistance }, { model: Room }],
          attributes: {
            include: [
              [
                sequelize.literal(
                  `(SELECT COUNT( id ) FROM 'Asistances' WHERE 'Asistances'.'RegistrantId' = 'Registrant'.'id' AND 'Asistances'.'leaveTime' IS NULL)`
                ),
                "connected",
              ],
            ],
          },
        });
        return JSON.parse(JSON.stringify(registrants));
      } catch (error) {
        throw error;
      }
    },

    async getById(id) {
      try {
        return await Registrant.findByPk(id);
      } catch (error) {
        throw error;
      }
    },

    async getByCode(code) {
      try {
        let registrant = await Registrant.findOne({
          where: { code },
          attributes: {
            include: [
              [
                sequelize.literal(
                  `(SELECT COUNT( id ) FROM 'Asistances' WHERE 'Asistances'.'RegistrantId' = 'Registrant'.'id' AND 'Asistances'.'leaveTime' IS NULL)`
                ),
                "connected",
              ],
            ],
          },
        });
        if (registrant.length == 0) {
          Error.code = 404;
          let noreg = new Error();
          noreg.name = "NoReg";
          noreg.message = "No está registrado";
          noreg.code = "404";
          throw noreg;
        }
        return registrant;
      } catch (error) {
        throw error;
      }
    },

    async addOne(regis) {
      let newRegis;
      try {
        newRegis = await Registrant.create(regis);
        if (newRegis) {
          let registrants = await this.getAll();
          io.emit("updated_registrant", registrants);
        }
        return newRegis;
      } catch (error) {
        throw error;
      }
    },

    async update(regis) {
      try {
        let id = regis.id;
        let updated = await Registrant.update(regis, { where: { id } });
        if (updated) {
          let registrants = await this.getAll();
          io.emit("updated_registrant", registrants);
        }
        return updated;
      } catch (error) {
        throw error;
      }
    },

    async delete(args) {
      let deleted;
      try {
        if (typeof args == "object") {
          deleted = await Registrant.destroy({
            where: {
              [Op.or]: args,
            },
          });
        } else {
          let id = args;
          deleted = await Registrant.destroy({
            where: { id },
          });
        }
        if (deleted && deleted > 0) {
          let registrants = await this.getAll();
          io.emit("updated_registrant", registrants);
        }
        return deleted;
      } catch (error) {
        throw error;
      }
    },

    async import(data) {
      try {
        await Registrant.bulkCreate(data, {});
        let registrants = await this.getAll();
        io.emit("updated_registrant", registrants);
      } catch (error) {
        throw error;
      }
    },

    async dropTable() {
      try {
        await Registrant.sync({ force: true });
        io.emit("dropped_registrants");
        return true;
      } catch (error) {
        throw error;
      }
    },
  };

  return controls;
};
