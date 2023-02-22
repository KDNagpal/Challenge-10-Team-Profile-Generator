const Engineer = require("../lib/engineer");

describe('Engineer', () => {
    describe('getGithubUser', () => {
        it('should return the engineers entered Github username', () => {
            const result = new Engineer('Kyle', 12, 'example@gmail.com', 'Username')
            expect(result.getGitHubUser()).toEqual('Username');
        })
    })

    describe('getTitle', () => {
        it('should return the engineers title', () => {
            const result = new Engineer ('Kyle', 12, 'example@gmail.com', 'Username');
            expect(result.getTitle()).toEqual('Engineer');
        })
    })
});