const router = require("express").Router();

module.exports = (io) => {
  const users = require("../controllers/users")(io);

  router.get("", users.getUsers);
  router.post("", users.addUser);
  router.delete("/:id", users.deleteUser);

  return router;
};
