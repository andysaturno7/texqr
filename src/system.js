const { Room, Registrant, sequelize } = require("./db/index");
Error.prototype.code = 500;

class System {
  id;
  address;
  name;
  useDefaultRoom;
  roomId;
  room;

  constructor(
    id,
    address,
    options = {
      name: "defaultName",
      useDefaultRoom: true,
      roomId: null
    }
  ) {
    this.id = options.id || id;
    this.address = options.address || address;
    this.name = options.name || "defaultName";
    this.useDefaultRoom = options.useDefaultRoom || true;
    if(options.roomId != null){
      this.roomId = options.roomId;
    }
  }

  verifyRegister(code) {
    return this.getRegistrantByCode(code)
      .then((registrant) => {
          return registrant.createAsistance({
            RoomId: this.room.id,
            joinTime: new Date(),
          }).then(()=>registrant);
      });
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

  setRoom(roomId = null) {
    return new Promise((resolve, reject)=>{
    if(this.roomId == null || undefined){
      this.useDefaultRoom = true;
    }
    if(this.useDefaultRoom && roomId == null && this.roomId == null){
      this.setDefaultRoom().then(resolve).catch(reject);
    }else{
      let id = roomId == null ? this.roomId : roomId;
      this.getRoomById(id).then(room=>{
        this.room = room;
        resolve(this.room);
      }).catch(err=> {throw err});
    }
    });
  }

  setDefaultRoom() {
    return new Promise((resolve, reject) => {
      this.getDefaultRoom().then((defaultRoom) => {
        this.room = defaultRoom;
        this.roomId = this.room.id;
        resolve();
      }).catch(err=> {throw err});
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
