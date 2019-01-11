const addpixelSuffix =(value) => value + "px";

const createPaddle = function (document) {
    let paddle = document.createElement('div');
    paddle.id = "paddle_1";
    paddle.className = 'paddle';
    document.getElementById('mainScreen').appendChild(paddle);
    return paddle;
};

const drawPaddle = function (paddleDiv, paddle) {
    paddleDiv.style.width = addpixelSuffix(paddle.width);
    paddleDiv.style.height = addpixelSuffix(paddle.height);
    paddleDiv.style.left = addpixelSuffix(paddle.left);
    paddleDiv.style.bottom = addpixelSuffix(paddle.bottom);
};
