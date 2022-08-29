const Employee = require("../lib/Employee.js");

describe('Employee', () => {
    const internName = 'tyler';
    const id = '1';
    const email = 'test@email.com';
    const employee = new Employee(internName, id, email);

    it("should get name", () => {
        expect(employee.getName()).toEqual(internName)
    });
    it("should get the id", () => {
        expect(employee.getId()).toEqual(id)
    });
    it("should get email", () => {
        expect(employee.getEmail()).toEqual(email)
    });
    it("should get the role", () => {
        expect(employee.getRole()).toEqual('Employee')
    });
    
})