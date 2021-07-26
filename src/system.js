const { Room, Registrant, sequelize } = require("./db/index");
Error.prototype.code = 500;

class System {
  id;
  address;
  name;
  useDefaultRoom;
  room;

  constructor(
    id,
    address,
    options = {
      name: "defaultName",
      useDefaultRoom: true,
    }
  ) {
    this.id = options.id || id;
    this.address = options.address || address;
    this.name = options.name || "defaultName";
    this.useDefaultRoom = options.useDefaultRoom || true;
  }

  verifyRegister(code) {
    var register;
    return this.getRegistrantByCode(code)
      .then((registrant) => {
        register = registrant;
        return registrant.createAsistance({
          RoomId: this.room.id,
          joinTime: new Date(),
        });
      })
      .then(() => register);
    return new Promise(async (resolve, reject) => {
      let activeRoom, registrants;
      if (this.useDefaultRoom && !this.room.isDefaultRoom) {
        activeRoom = await this.getDefaultRoom();
      } else {
        activeRoom = this.room;
      }
      registrants = await activeRoom.getRegistrants({
        where: { code },
        limit: 1,
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
      if (registrants.length > 0) resolve(registrants[0]);
      let error = new Error();
      error.message = "No está registrado";
      error.code = 400;
      error.name = "NoReg";
      reject(error);
    });
  }

  setRoom(room) {
    !!room ? (this.room = room) : this.setDefaultRoom();
  }

  setDefaultRoom() {
    return new Promise((resolve) => {
      this.getDefaultRoom().then((defaultRoom) => {
        this.room = defaultRoom;
        resolve();
      });
    });
  }

  getDefaultRoom() {
    return new Promise((resolve) => {
      Room.findOne({ where: { isDefaultRoom: true } })
        .then(resolve)
        .catch((err) => {
          throw err;
        });
    });
  }

  getRoomById(id) {
    return new Promise((resolve) => {
      Room.findOne({ where: { id } })
        .then(resolve)
        .catch((err) => {
          throw err;
        });
    });
  }

  get rawValue() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      roomId: this.room.id,
      room: this.room.name,
      useDefaultRoom: this.useDefaultRoom,
    });
  }

  getRegistrantByCode(code) {
    return Registrant.findOne({
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
  }
}

module.exports = System;
