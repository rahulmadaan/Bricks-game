class Paddle {
    constructor(width, height, left, bottom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.bottom = bottom;
    }
    moveLeft() {
        this.left = (this.left - 10);
        if(this.left <=0 ) this.left = 0;
    }
    moveRight() {
        this.left = (this.left + 10) % 860 || this.left;
    }
    getLeft(){
        return this.left;
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
    moveUp(){
        this.bottom = this.bottom + 10;
    }
    moveBottom(){
        this.bottom = this.bottom - 10;
    }
    
};