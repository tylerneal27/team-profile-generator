const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email, "Engineer");
    this.gitHub = gitHub;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getGitHub() {
    return this.gitHub
  }
  getRole() {
    return this.title;
  }
}

module.exports = Engineer;
