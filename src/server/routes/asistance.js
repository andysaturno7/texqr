const router = require("express").Router();

module.exports = (io) => {
  const asist = require("../controllers/asistance")(io);

  router.get("", asist.getAll);
  router.get("/last/:id", asist.getLast);
  router.post("/join", asist.join);
  router.post("/leave", asist.leave);
  router.get("/count", asist.getDataCount);
  router.post("/add", asist.addOne);

  return router;
};
