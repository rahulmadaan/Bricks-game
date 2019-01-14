class Paddle {
    constructor(width, height, left, bottom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.bottom = bottom;
    }
    moveLeft() {
        this.left = (this.left - 10);
        if (this.left <= 0) this.left = 0;
    }
    moveRight() {
        this.left = (this.left + 10) % 860 || this.left;
    }
    getLeft() {
        return this.left;
    }
};

class Ball {
    constructor(radius, left, top,) {
        this.width = radius;
        this.height = radius;
        this.left = left;
        this.top = top;
        this.x = -1;
        this.y = -1;
    }
    moveHorizontal() {
        this.left = this.left + this.x * 5;
    }
    changeHorizontalDirection() {
        this.x = this.x * -1;
    }

    moveVertical() {
        this.top = this.top + this.y * 5;
    }
    changeVerticalDirection() {
        this.y = this.y * -1;
    }

};


class Game {
    constructor(paddle, ball, horizontalBoundary, verticalBoundary) {
        this.paddle = paddle;
        this.ball = ball;
        this.horizontalBoundary = horizontalBoundary;
        this.verticalBoundary = verticalBoundary;
    }
    isHorizontalCollide() {
        return this.ball.left == 0 || this.ball.left == this.horizontalBoundary - this.ball.width;
    }
    isVerticalCollide() {
        return this.ball.top == 0;
    }
    isBottomCollide() {
        return this.ball.top == this.verticalBoundary - this.ball.width;
    }





}
