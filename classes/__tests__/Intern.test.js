const Intern = require("../Intern.js");

describe('Intern', () => {
    const internName = 'tyler';
    const id = '1';
    const email = 'test@email.com';
    const school = 'OSU';
    const intern = new Intern(internName, id, email, school);
    it("should get name", () => {
        expect(intern.getName()).toEqual(internName)
    });
    it("should get the id", () => {
        expect(intern.getId()).toEqual(id)
    });
    it("should get email", () => {
        expect(intern.getEmail()).toEqual(email)
    });
    it("should get the school", () => {
        expect(intern.getSchool()).toEqual(school)
    })
})