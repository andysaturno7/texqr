const { dialog } = require("electron");
const fs = require("fs");
const csv = require("fast-csv");
const Registrant = require("./db/index").Registrant;
const os = require("os");

module.exports = (io) => {
  return {
    launch_import(ev, args) {
      dialog
        .showOpenDialog({ properties: ["openFile"] })
        .then((result) => {
          if (result.canceled) {
            return { message: "Import cancelled" };
          } else {
            let parsed_data = [];
            let path = result.filePaths[0];
            fs.createReadStream(path, { encoding: "utf-8" })
              .pipe(csv.parse({ headers: true }))
              .on("data", (row) => {
                parsed_data.push(row);
              })
              .on("end", async () => {
                try {
                  await Registrant.bulkCreate(parsed_data, {});
                  let registrants = await Registrant.findAll();
                  io.emit("updated_registrant", registrants);
                } catch (error) {
                  console.log({ message: "Error en bulk", error });
                }
              })
              .on("error", (error) => console.log(error));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getIP() {
      var interfaces = os.networkInterfaces();
      var addresses = [];
      for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
          let address = interfaces[k][k2];
          if (address.family === "IPv4" && !address.internal) {
            addresses.push(address.address);
          }
        }
      }
      return addresses;
    },
  };
};
