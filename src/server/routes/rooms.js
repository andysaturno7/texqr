const router = require("express").Router();

module.exports = (io) => {
  const room = require("../controllers/rooms")(io);

  router.get("", room.getAll);
  router.get("/:id", room.getById);
  router.post("", room.add);
  router.delete("", room.bulkDelete);
  router.delete("/:id", room.delete);
  router.post("/update", room.update);
  router.post("/tests", room.tests);

  return router;
};
