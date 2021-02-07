let expect    = require("chai").expect;
let calculator = require("../app/calculator");


describe("Test Cases for Calculator", () => {
    describe("Adding Function", () => {
        it("gives the sum of two numbers", () => {
            let number1 = calculator.add(255, 0);
            let number2 = calculator.add(5, 10)


            expect(number1).to.equal(255);
            expect(number2).to.equal(15)
        });
    });

    describe("Adding Function (fail)", () => {
        it("gives the sum of two numbers", () => {
            let number2 = calculator.add(5, 10)
            expect(number2).to.equal(20)
        });
    });

    describe("Minus Function", () => {
        it("gives result of subtraction", () => {
            let number1 = calculator.sub(255, 0);
            let number2 = calculator.sub(10, 5)


            expect(number1).to.equal(255);
            expect(number2).to.equal(5)
        });
    });

    describe("Minus Function (fail)", () => {
        it("gives result of subtraction", () => {
            let number2 = calculator.sub(10, 5)

            expect(number2).to.equal(6)
        });
    });

    describe("Multiplication Function", () => {
        it("gives result of multiplication", () => {
            let number1 = calculator.mul(255, 0);
            let number2 = calculator.mul(10, 5)


            expect(number1).to.equal(0);
            expect(number2).to.equal(50)
        });
    });

    describe("Multiplication Function (fail)", () => {
        it("gives result of multiplication", () => {
            let number2 = calculator.mul(10, 5)

            expect(number2).to.equal(55)
        });
    });

    describe("Division Function", () => {
        it("gives result of division of two numbers", () => {
            let number1 = calculator.div(255, 5);
            let number2 = calculator.div(10, 5)


            expect(number1).to.equal(51);
            expect(number2).to.equal(2)
        });
    });

    describe("Division Function (fail)", () => {
        it("gives result of division of two numbers", () => {
            let number2 = calculator.div(10, 5)

            expect(number2).to.equal(3)
        });
    });
});
