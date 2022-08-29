import Employee from './Employee.js';


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, 'Manager')
    this.officeNumber = officeNumber
  }
}


export default Manager;