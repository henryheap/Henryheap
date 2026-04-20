const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 20
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius

const LPadel = document.createElement('div')
document.body.appendChild(LPadel)
let LPadelWidth = 20
let LPadelHeight = 200
let LPadelSpeed = 10
let LPadelYPosition = windowHeight / 2 - LPadelHeight / 2
let LPadelXPosition = windowWidth / 100

let leftScore = 0;
let rightScore = 0;
const scoreBoard = document.createElement('score')


const RPadel = document.createElement('div')
document.body.appendChild(RPadel)
let RPadelWidth = 20
let RPadelHeight = 200
let RPadelSpeed = 10
let RPadelYPosition = windowHeight / 2 - RPadelHeight / 2
let RPadelXPosition = windowWidth / 100
let RPadelTop = RPadelYPosition
let RPadelBottom = RPadelYPosition + RPadelHeight
let RPadelRight = RPadelXPosition + RPadelWidth



let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1



// function moveBall() {
//     ballXPosition = ballXPosition + ballSpeed * ballXDirection
//     ballYPosition = ballYPosition + ballSpeed * ballYDirection
//     ball.style.left = `${ballXPosition}px`
//     ball.style.top = `${ballYPosition}px`
//     let ballTop = ballYPosition
//     let ballBottom = ballYPosition + 2 * ballRadius
//     let ballLeft = ballXPosition
//     let LPadelTop = LPadelYPosition
//     let LPadelBottom = LPadelYPosition + LPadelHeight
//     let LPadelRight = LPadelXPosition + LPadelWidth

//     if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
//         ballYDirection = ballYDirection * -1
//     }
//     if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
//         ballXDirection = ballXDirection * -1
//     }

//     if (
//         (ballBottom >= LPadelTop) &&
//         (ballTop <= LPadelBottom) &&
//         (ballLeft <= LPadelRight) &&
//         (ballXDirection == -1)
//     ) {
//         ballXDirection = ballXDirection * -1
//     }

// }

function moveBall() {
    // Update ball position
    ballXPosition += ballSpeed * ballXDirection;
    ballYPosition += ballSpeed * ballYDirection;

    // Update ball on screen
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

    // Define ball edges
    const ballTop = ballYPosition;
    const ballBottom = ballYPosition + 2 * ballRadius;
    const ballLeft = ballXPosition;
    const ballRight = ballXPosition + 2 * ballRadius;

    // Wall collision (top/bottom)
    if (ballTop < 0 || ballBottom > windowHeight) {
        ballYDirection *= -1;
    }

    // Left Paddle collision
    if (
        ballLeft <= LPaddleXPosition + LPaddleWidth &&
        ballRight >= LPaddleXPosition &&
        ballBottom >= LPaddleYPosition &&
        ballTop <= LPaddleYPosition + LPaddleHeight
    ) {
        ballXDirection = 1; // bounce right

        // Optional: adjust angle based on where it hit the paddle
        const hitPos = (ballTop + ballRadius - LPaddleYPosition) / LPaddleHeight;
        ballYDirection = hitPos < 0.5 ? -1 : 1;
    }

    // Right Paddle collision
    if (
        ballRight >= RPaddleXPosition &&
        ballLeft <= RPaddleXPosition + RPaddleWidth &&
        ballBottom >= RPaddleYPosition &&
        ballTop <= RPaddleYPosition + RPaddleHeight
    ) {
        ballXDirection = -1; // bounce left

        // Optional: adjust angle based on hit position
        const hitPos = (ballTop + ballRadius - RPaddleYPosition) / RPaddleHeight;
        ballYDirection = hitPos < 0.5 ? -1 : 1;
    }

    // Out-of-bounds (score)
    if (ballLeft < 0) {
        rightPlayerScore++;
        resetBall();
    } else if (ballRight > windowWidth) {
        leftPlayerScore++;
        resetBall();
    }
}ws

createBall()

function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "black"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLPadel()

function createLPadel() {
    LPadel.style.height = `${LPadelHeight}px`
    LPadel.style.width = `${LPadelWidth}px`
    LPadel.style.backgroundColor = "blue"
    LPadel.style.position = "absolute"
    LPadel.style.left = "50px"
    LPadel.style.top = `${windowHeight/ 2 - LPadelHeight/2}px`
}

createRPadel()

function createRPadel() {
    RPadel.style.height = `${RPadelHeight}px`
    RPadel.style.width = `${RPadelWidth}px`
    RPadel.style.backgroundColor = "blue"
    RPadel.style.position = "absolute"
    RPadel.style.right = "50px"
    RPadel.style.top = `${windowHeight/ 2 - RPadelHeight/2}px`
}



upKey = false
downKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        upKey = true
    }
    if (event.key == 'ArrowDown') {
        downKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'ArrowUp') {
        upKey = false
    }
    if (event.key == 'ArrowDown') {
        downKey = false
    }
})


wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})


function moveLPadel() {
    if (wKey == true && LPadelYPosition > 0) {
        LPadelYPosition = LPadelYPosition - LPadelSpeed
    }
    if (sKey == true && LPadelYPosition < windowHeight - LPadelHeight) {
        LPadelYPosition = LPadelYPosition + LPadelSpeed
    }
    LPadel.style.top = `${LPadelYPosition}px`
}

function moveRPadel() {
    if (upKey == true && RPadelYPosition > 0) {
        RPadelYPosition = RPadelYPosition - RPadelSpeed
    }
    if (downKey == true && RPadelYPosition < windowHeight - RPadelHeight) {
        RPadelYPosition = RPadelYPosition + RPadelSpeed
    }
    RPadel.style.top = `${RPadelYPosition}px`
}


function animate() {
    moveBall()
    moveLPadel()
    moveRPadel()
    requestAnimationFrame(animate)
}

animate()
