const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    let employee;

    beforeEach(() => {
        employee = new Employee("Bob", 0, "bob@email.com");
    });

    describe("Initialization", () => {
        it("should create an Employee object with a name, id, and email", () => {
            expect(employee.name).toEqual("Bob");
            expect(employee.id).toEqual(0);
            expect(employee.email).toEqual("bob@email.com");
        });
    });

    describe("getName", () => {
        it("should return the name of the Employee", () => {
            expect(employee.getName()).toEqual("Bob");
        });
    });

    describe("getId", () => {
        it("should return the ID of the Employee", () => {
            expect(employee.getId()).toEqual(0);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the Employee", () => {
            expect(employee.getEmail()).toEqual("bob@email.com");
        });
    });

    describe("getRole", () => {
        it("should return the role of the Employee as 'Employee'", () => {
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
