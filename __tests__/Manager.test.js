const Manager = require("../lib/Manager.js");

describe('Manager', () => {
    const internName = 'tyler';
    const id = '1';
    const email = 'test@email.com';
    const officeNumber = '27';
    const manager = new Manager(internName, id, email, officeNumber);
    it("should get name", () => {
        expect(manager.getName()).toEqual(internName)
    });
    it("should get the id", () => {
        expect(manager.getId()).toEqual(id)
    });
    it("should get email", () => {
        expect(manager.getEmail()).toEqual(email)
    });
    it("should get the manager/'s office number", () => {
        expect(manager.getOfficeNumber()).toEqual(officeNumber)
    });
    it("should get the role", () => {
        expect(manager.getRole()).toEqual('Manager')
    });
})