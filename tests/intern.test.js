const Intern = require("../lib/intern");


describe('Intern', () => {
    describe('getInternSchool', () => {
        it('should return the entered school name', () => {
            const result = new Intern('Kyle', 12, 'example@gmail.com', 'MSU')
            expect(result.getInternSchool()).toEqual('MSU');
        })
    })

    describe('getTitle', () => {
        it('should return the interns title', () => {
            const result = new Intern ('Kyle', 12, 'example@gmail.com', 'MSU');
            expect(result.getTitle()).toEqual('Intern');
        })
    })
})