import Employee from './Employee.js'

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
    super(name, id, email, 'Engineer')
    this.gitHub = gitHub
  }
}

export default Engineer