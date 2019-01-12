const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const mainScreen = (document) => document.getElementById('mainScreen');

const setPaddle = function () {
    const paddle = new Paddle(150, 20, 400, 0);
    const paddleDiv = createPaddle(document);
    const screen = mainScreen(document);
    screen.onkeydown = keyEventHandler.bind(null, paddle, paddleDiv);
    drawPaddle(paddleDiv, paddle);
};

const setBall = function () {
    const ball = new Ball(50, 430, 50);
    const ballDiv = createBall(document);
    drawBall(ballDiv, ball);
};

const startGame = function (document) {
    setPaddle();
    setBall();
};

const keyEventHandler = function (paddle, paddleDiv) {
    if (event.key == ARROW_LEFT) {
        paddle.moveLeft();
    }
    if (event.key == ARROW_RIGHT) {
        paddle.moveRight();
    }
    drawPaddle(paddleDiv, paddle);
};

const moveBall = function() {
    
}

const initialize = function () {
    startGame(document);
};

window.onload = initialize;

