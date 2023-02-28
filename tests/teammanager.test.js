const TeamManager = require("../lib/teammanager");

describe("TeamManager",() => {
    describe('getOfficeNum', () => {
        it('should return the entered office number', () => {
            const result = new TeamManager('Kyle', 12, 'example@gmail.com', 35);
            expect(result.getOfficeNum()).toEqual(35)
            
        })
    })

    describe('getTitle', () => {
        it('should return the engineers title', () => {
            const result = new TeamManager ('Kyle', 12, 'example@gmail.com', 'Username');
            expect(result.getTitle()).toEqual('Manager');
        })
    })
})