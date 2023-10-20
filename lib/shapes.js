class Shape{
    constructor(shape, title, titleColor, shapeColor) {
        this.shape = shape;
        this.title = title;
        this.titleColor = titleColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${this.shapeColor}" />
        <text x="0" y="15" fill="${this.titleColor}">${this.title}</text>
        </svg>`
    }
}

module.exports = Shape