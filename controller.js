const startGame = function (document) {
    let paddle = new Paddle(150, 20, 400, 0);
    let paddleDiv = createPaddle(document);
    drawPaddle(paddleDiv, paddle);
};

const initialize = function () {
    startGame(document);
};

window.onload = initialize;