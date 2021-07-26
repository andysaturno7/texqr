class Session {
  name = "";
  client_systems = [];

  constructor() {
    this.name = "Default Session";
  }

  getSystems() {
    return this.client_systems;
  }

  addSystem(system) {
    this.client_systems.push(system);
    return {
      affectedSystem: system,
      systems: this.getSystems(),
    };
  }

  removeSystem(systemId) {
    let system;
    for (let i = 0; i < this.client_systems.length; i++) {
      let element = this.client_systems[i];
      if (element.id == systemId) {
        this.client_systems.splice(i, 1);
        system = element;
        break;
      } else {
        system = null;
      }
    }
    return {
      affectedSystem: system,
      systems: this.getSystems(),
    };
  }

  updateSystem(system) {
    for (let i = 0; i < this.client_systems.length; i++) {
      let element = this.client_systems[i];
      if (element.id == system.id) {
        this.client_systems[i] = system;
        break;
      } else {
        system = null;
      }
    }
    return {
      affectdSystem: this.client_systems[i],
      systems: this.getSystems(),
    };
  }

  verifyRegisterBySystem(systemId, clientCode) {
    let system;
    for (let index = 0; index < this.client_systems.length; index++) {
      if (this.client_systems[index].id == systemId) {
        system = this.client_systems[index];
        break;
      }
    }
    return system.verifyRegister(clientCode);
  }
}

module.exports = Session;
