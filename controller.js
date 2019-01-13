const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const mainScreen = (document) => document.getElementById('mainScreen');

const insertPaddle = function () {
    const paddle = new Paddle(200, 30, 400, 0);
    const paddleDiv = createPaddle(document);
    const screen = mainScreen(document);
    screen.onkeydown = keyEventHandler.bind(null, paddle, paddleDiv);
    drawPaddle(paddleDiv, paddle);
};

const insertBall = function () {
    const ball = new Ball(50, 430, 50);
    const ballDiv = createBall(document);
    drawBall(ballDiv, ball);
    return { ballDiv, ball };
};

const startGame = function (document) {
    insertPaddle();
    let ball = insertBall();
    moveBall(ball);
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

const moveBall = function (element) {
    let { ballDiv, ball } = element;
    let move = ball.moveUp.bind(ball);
    let bounds = { bottom: 30, top: 650, left: 200, right: 200 };
    setInterval(() => {
        if (ball.bottom == bounds.bottom) {
            move = ball.moveUp.bind(ball);
        }
        if (ball.bottom == bounds.top) {
            move = ball.moveBottom.bind(ball);
        }
        move();
        drawBall(ballDiv, ball);
    }, 30);
}

const initialize = function () {
    startGame(document);
};

window.onload = initialize;

