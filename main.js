class Paddle {
    constructor(width, height, left, bottom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.bottom = bottom;
    }
    moveLeft() {
        this.left = this.left - 10;
    }
    moveRight() {
        this.left = this.left + 10;
    }
};

class Ball {
    constructor(radius,left, bottom, borderRadius=50) {
        this.width = radius;
        this.height = radius;
        this.left = left;
        this.bottom = bottom;
        this['border-radius'] = borderRadius;
    }

};