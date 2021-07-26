const { User } = require("../index");

module.exports = (io) => {
  const controls = {
    async getUsers() {
      try {
        return await User.findAll();
      } catch (error) {
        return error;
      }
    },

    async getUser(id) {
      try {
        //  Retorna Null sino encuentra Registro
        return await User.findByPk(id);
      } catch (error) {
        return error;
      }
    },

    async addUser(user) {
      let newUser;
      try {
        newUser = await User.create(user);
      } catch (error) {
        return error;
      }
      if (newUser) {
        io.emit("new_user", JSON.stringify(newUser));
        return newUser;
      }
    },

    async updateUser(user) {
      try {
        let id = user.id;
        let updatedUser = await User.update(user, { where: { id } });
        if (updatedUser) {
          io.emit("updated_user", updatedUser);
        }
        return updatedUser;
      } catch (error) {
        return error;
      }
    },

    async deleteUser(id) {
      let deleted;
      try {
        //   Retorna la cantidad de Registro eliminado
        deleted = await User.destroy({
          where: { id },
        });
      } catch (error) {
        return error;
      }
      if (deleted && deleted != 0) {
        io.emit("deleted_user", { id });
      }
      return deleted;
    },
  };

  return controls;
};
