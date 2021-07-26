const router = require("express").Router();

module.exports = (io) => {
  const regis = require("../controllers/registrants")(io);

  router.get("", regis.getRegistrants);
  router.get("/:code", regis.getRegistrantByCode);
  router.post("", regis.addRegistrant);
  router.delete("", regis.deleteRegistrant);
  router.delete("/:id", regis.deleteRegistrant);
  router.delete("/all", regis.dropRegistrants);

  return router;
};
