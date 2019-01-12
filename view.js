const addpixelSuffix = (value) => value + "px";


const createPaddle = function (document) {
    let paddle = document.createElement('div');
    paddle.id = "paddle_1";
    paddle.className = 'paddle';
    document.getElementById('mainScreen').focus();
    document.getElementById('mainScreen').appendChild(paddle);
    return paddle;
};
const drawPaddle = function (paddleDiv, paddle) {
    const setPaddleProperty = function(property) {
       paddleDiv.style[property] = addpixelSuffix(paddle[property]); 
    }
    const properties = ['width','height','left','bottom'];
    properties.forEach(setPaddleProperty);
};

const createBall = function () {
    const ball = document.createElement('div');
    ball.id = "ball_1";
    ball.className = "ball";
    document.getElementById('mainScreen').appendChild(ball);
    return ball;
};

const drawBall = function(ballDiv,ball){
    let setBallProperty = function(property){
        ballDiv.style[property] = addpixelSuffix(ball[property]);
    }
    const properties = ['width','height','left','bottom','border-radius'];
    properties.forEach(setBallProperty);
};