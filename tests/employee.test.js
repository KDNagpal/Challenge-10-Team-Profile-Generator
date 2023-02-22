const Employee = require ('../lib/employee');

describe("Employee", () => {

    describe('getEmpName', () => {
        it('should return the entered employee name', () => {
            const result = new Employee ('Kyle', 12, 'example@gmail.com');
            expect(result.getEmpName()).toEqual('Kyle');
        })
    })

      describe('getEmpId', () => {
        it('should return the entered employee ID number', () => {
            const result = new Employee ('Kyle', 12, 'example@gmail.com');
            expect(result.getEmpId()).toEqual(12);
        })
    })

    describe('getEmpEmail', () => {
        it('should return the entered employee email', () => {
            const result = new Employee ('Kyle', 12, 'example@gmail.com');
            expect(result.getEmpEmail()).toEqual('example@gmail.com');
        })
    })

    describe('getTitle', () => {
        it('should return the employees title', () => {
            const result = new Employee ('Kyle', 12, 'example@gmail.com');
            expect(result.getTitle()).toEqual('Employee');
        })
    })
})