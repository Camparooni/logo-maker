const { Circle, Triangle, Square } = require("./shapes.js");

//the following tests check that when a shape class is chosen that it has the correct shape tag to render the image appropriately

describe("Circle", () => {
    it("should contain a circle element", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="blue"/>'
        );
    });
});

describe("Triangle", () => {
    it("should contain a polygon element", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        );
    });
});

describe("Square", () => {
    it("should contain a rectangle element", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="160" height="160" x="70" y="20" fill="blue"/>'
        );
    });
});