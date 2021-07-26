const path = require("path");

module.exports = (io) => {
  const _user = require("../../db/functions/users")(io);
  const controls = {
    async getUsers(req, res) {
      try {
        let users = await _user.getUsers();
        return res.status(200).send(users);
      } catch (error) {
        return res.send(error);
      }
    },

    async addUser(req, res) {
      try {
        let newUser = await _user.addUser(req.body);
        if (newUser.errors) {
          return res.status(404).send(newUser.errors);
        }
        return res.status(200).send(newUser);
      } catch (error) {
        return res.send(error);
      }
    },

    async deleteUser(req, res) {
      let id = req.params.id;
      try {
        let deleted = await _user.deleteUser(id);
        if (deleted == 0) {
          return res
            .status(404)
            .send({ message: "No coincide nigún registro." });
        }
        return res
          .status(200)
          .send({ message: `Han sido eliminados ${deleted} registro(s)` });
      } catch (error) {
        return res.status(500).send(error);
      }
    },
  };

  return controls;
};
