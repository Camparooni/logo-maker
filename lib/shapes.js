class Shape{
    constructor(shape, title, titleColor, shapeColor) {
        this.shape = shape;
        this.title = title;
        this.titleColor = titleColor;
        this.shapeColor = shapeColor;
    }
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${this.shape} cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />
        
        <text x="150" y="115" text-anchor="middle" font-size="40" fill="${this.titleColor}">${this.title}</text>
        
        </svg>`
    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="0,250 300,250 150,0" height="100%" width="100%" fill="${this.shapeColor}"/>`
    }
};

module.exports = Shape, Circle, Square, Triangle