const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const { createWindow, createDisplay } = require("./init");
const path = require("path");
const csv = require("fast-csv");
const fs = require("fs");
const { sequelize } = require("./db/index");
const Session = require("./session");
const System = require("./system");
const PORT = process.env.PORT || 5050;

Error.prototype.code = 500;

// Iniciar sesión
const session = new Session();
const { server, io } = require("./server/index");

if (process.env.NODE_ENV == "server") {
  // Logic
} else {
  // Logic
}

async function initApp() {
  // Sincronizar base de datos
  let dbdir = fs.readdirSync(path.join(__dirname, "db"));
  if (dbdir.find((val) => val === "database.db") === undefined)
    await sequelize.sync();
  console.log("Base de Datos sincronizada");
  _room().setDefaultRoom();
  return new Promise((resolve, reject) => {
    // Arrancar servidor
    server
      .listen(PORT, () => {})
      .once("listening", () => {
        console.log("Escuchando puerto " + server.address().port);
        resolve();
      });
  });
}

// Importando funciones de Base de Datos
const dbFunctionsDir = path.join(app.getAppPath(), "src", "db", "functions");
const _user = require(path.join(dbFunctionsDir, "users"));
const _registrant = require(path.join(dbFunctionsDir, "registrants"));
const _asistance = require(path.join(dbFunctionsDir, "asistance"));
const _room = require(path.join(dbFunctionsDir, "room"));

app.whenReady().then(async () => {
  console.log("App isReady");
  await initApp();
  console.log("Servidor y base de Datos Lista");
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("deployDisplay", (ev, arg) => {
  if (arg[0].message == "deploy") {
    createDisplay();
  }
  io.emit("welcome", { message: "Coneccion establecida con exito" });
});

ipcMain.on("setFullScreen", (ev, arg) => {
  display.setFullscreen(true);
});

ipcMain.on("launch_import", () => {
  dialog
    .showOpenDialog({ properties: ["openFile"] })
    .then((result) => {
      if (result.canceled) {
        return;
      } else {
        let parsed_data = [];
        let path = result.filePaths[0];
        fs.createReadStream(path, { encoding: "utf-8" })
          .pipe(csv.parse({ headers: true }))
          .on("data", (row) => {
            parsed_data.push(row);
          })
          .on("end", () => {
            if (parsed_data.length > 0)
              _registrant(io)
                .import(parsed_data)
                .catch((err) => dialog.showErrorBox(err.name, err.message));
          })
          .on("error", (err) => dialog.showErrorBox(err.name, err.message));
      }
    })
    .catch((err) => dialog.showErrorBox(err.name, err.message));
});

ipcMain.handle("get_ip", (ev, args) => {
  let ip = require("./functions")().getIP();
  console.log(ip);
  return require("./functions")().getIP();
});

ipcMain.handle("get_users", async (eve, args) => {
  return await _user(io).getUsers();
});

// Registrants Controllers

ipcMain.handle("get_registrants", async (eve, args) => {
  return await _registrant(io).getAll();
});

ipcMain.handle("add_registrant", async (eve, args) => {
  return await _registrant(io).addOne(args);
});

ipcMain.handle("update_registrants", async (eve, args) => {
  if (args instanceof Array) {
    let promises = [];
    args.forEach((element) => {
      promises.push(_registrant(io).update(element));
    });
    let affected = await Promise.all(promises);
    return affected;
  } else {
    return await _registrant(io).update(args);
  }
});

ipcMain.handle("delete_registrant", async (eve, args) => {
  return await _registrant(io).delete(args);
});

ipcMain.handle("drop_registrants", async (ev, args) => {
  return await _registrant(io).dropTable();
});

// Asistance Controllers

ipcMain.handle("get_asistance", async (ev, args) => {
  return await _asistance(io).getAll();
});

ipcMain.handle("get_asistance_count", async (ev, args) => {
  return await _asistance(io).data();
});

// Rooms Controllers

ipcMain.handle("get_rooms", async (ev, args) => {
  return await _room().getAll();
});

ipcMain.handle("get_room", async (ev, id) => {
  return await _room().getById(id);
});

ipcMain.handle("add_room", async (ev, args) => {
  return await _room().addOne(args).then(res=>{
    console.log(res);
  });
});

ipcMain.handle("delete_room", async (ev, id) => {
  return await _room().remove(id);
});

ipcMain.handle("update_room", async (ev, args) => {
  return await _room().update(args);
});

// Systems Controllers

ipcMain.handle("get_systems", async (ev, args) => {
  return await session.getSystems();
});

// Socket Controllers

io.on("connection", (socket) => {
  // socket.emit("welcome", { message: "Conectado con Sockets IO" });
  socket.on("connect_client", (args) => {
    let address = args.address || socket.handshake.address;
    let idx = address.lastIndexOf(":");
    if (~idx && ~address.indexOf(".")) address = address.slice(idx + 1);
    let system = new System(socket.id, address, args);
    system
      .setDefaultRoom()
      .then(() => session.addSystem(system))
      .then((addedData) => {
        addedData["type"] = "connect";
        io.emit("updated_systems", addedData);
      });
  });
  socket.on("client_scanned", async (clientCode) => {
    try {
      let register = await session.verifyRegisterBySystem(
        socket.id,
        clientCode
      );
      socket.emit("client_verified", register);
    } catch (error) {
      console.log(error);
      socket.emit("error", error);
    }
  });
  socket.on("disconnect", (reason) => {
    let removedData = session.removeSystem(socket.id);
    removedData["type"] = "disconnect";
    io.emit("updated_systems", removedData);
  });
});

io.on("get_asistance_count", (socket) => {
  console.log(`Socket en el servidor: ${socket}`);
});
