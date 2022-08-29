import Employee from './Employee.js'

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'intern')
        this.school = school
    }
}

export default Intern