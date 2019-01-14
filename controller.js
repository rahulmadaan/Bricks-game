const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const mainScreen = (document) => document.getElementById('mainScreen');


const paddle = new Paddle(200, 30, 400, 0);
const ball = new Ball(50, 400, 540);
const game = new Game(paddle, ball, 1000, 700);

const insertPaddle = function () {
    const paddleDiv = createPaddle(document);
    const screen = mainScreen(document);
    screen.onkeydown = keyEventHandler.bind(null, paddle, paddleDiv);
    drawPaddle(paddleDiv, paddle);
};

const insertBall = function (document) {
    const ballDiv = createBall(document);
    drawBall(ballDiv, ball);
    return { ballDiv, ball };
};

const startGame = function (document) {
    insertPaddle(document);
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
    setInterval(() => {
        if (game.isHorizontalCollide()) {
            ball.changeHorizontalDirection();
        }
        if (game.isVerticalCollide()) {
            ball.changeVerticalDirection();
        }
        if (game.isBottomCollide()) {
            ball.changeVerticalDirection(); // collide on bottom under the paddle
            alert('game over');
        }
        if (game.isAtPaddle()) {
            ball.changeVerticalDirection();
        }
        ball.moveHorizontal();
        ball.moveVertical();
        drawBall(ballDiv, ball);

    }, 30);
}

const initialize = function () {
    startGame(document);
};

window.onload = initialize;