const Engineer = require("../lib/Engineer.js");

describe('Engineer', () => {
    const internName = 'tyler';
    const id = '1';
    const email = 'test@email.com';
    const gitHub = 'tylerneal27';
    const engineer = new Engineer(internName, id, email, gitHub);
    it("should get name", () => {
        expect(engineer.getName()).toEqual(internName)
    });
    it("should get the id", () => {
        expect(engineer.getId()).toEqual(id)
    });
    it("should get email", () => {
        expect(engineer.getEmail()).toEqual(email)
    });
    it("should get the GitHub", () => {
        expect(engineer.getGitHub()).toEqual(gitHub)
    });
    it("should get the role", () => {
        expect(engineer.getRole()).toEqual('Engineer')
    });
})