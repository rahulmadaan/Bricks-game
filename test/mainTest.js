describe("Paddle", function () {
    const paddle = new Paddle(200, 30, 400, 0);

    it("moveLeft : should return left position decreased by 10", function () {
        paddle.moveLeft();
        chai.assert(paddle.getLeft(), 390);
    });
    it("moveRight : should return left position increased by 10", function () {
        paddle.moveRight();
        chai.assert(paddle.getLeft(), 400);
    });
});
