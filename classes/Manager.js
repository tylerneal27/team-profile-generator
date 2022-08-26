const Employee = require('./Employee')


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, 'Manager')
    this.officeNumber = officeNumber
  }
}

// const test = new Manager('tyler', 72, 'test@gmail.com', 420)

// console.log(test);

module.exports = Manager;