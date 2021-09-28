const http = require("http");
const { json } = require("express");
const cors = require("cors");
const exp = require("express");
const express = exp();
const { Server } = require("socket.io");
const path = require("path");

const server = http.createServer(express);
const io = new Server(server, {
  cors: {
    allowedHeaders: "tex-header",
  },
});

// Middlewares
express.use(cors());
express.use(json());
express.use(exp.static(path.join(__dirname, "..", "render", "scanner-client")));

express.get("/", (req, res) => {
  res.sendFile("/index.html");
});

// Rutas
const userRoutes = require("./routes/users")(io);
const regisRoutes = require("./routes/registrants")(io);
const asistanceRoutes = require("./routes/asistance")(io);
const roomsRoutes = require("./routes/rooms")(io);

express.use("/users", userRoutes);
express.use("/registrants", regisRoutes);
express.use("/asistance", asistanceRoutes);
express.use("/rooms", roomsRoutes);


module.exports = { server, io };
