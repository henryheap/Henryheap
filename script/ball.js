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
let LPadelXPosition = 50

let leftScore = 0;
let rightScore = 0;
const scoreBoard = document.createElement('score')


const RPadel = document.createElement('div')
document.body.appendChild(RPadel)
let RPadelWidth = 20
let RPadelHeight = 200
let RPadelSpeed = 10
let RPadelYPosition = windowHeight / 2 - RPadelHeight / 2
let RPadelXPosition = windowWidth - 50 - RPadelWidth
let RPadelTop = RPadelYPosition
let RPadelBottom = RPadelYPosition + RPadelHeight
let RPadelRight = RPadelXPosition + RPadelWidth



let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

function moveBall() {
    // addition assignment operator
    ballXPosition += ballSpeed * ballXDirection
    ballYPosition += ballSpeed * ballYDirection

    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`

    const ballTop = ballYPosition
    const ballBottom = ballYPosition + 2 * ballRadius
    const ballLeft = ballXPosition
    const ballRight = ballXPosition + 2 * ballRadius

    if (ballTop < 0) {
        ballYDirection = 1
        ballYPosition = 0
    } else if (ballBottom > windowHeight) {
        ballYDirection = -1
        ballYPosition = windowHeight - 2 * ballRadius
    }

    const LPadelTop = LPadelYPosition
    const LPadelBottom = LPadelYPosition + LPadelHeight
    const LPadelRight = LPadelXPosition + LPadelWidth

    const RPadelTop = RPadelYPosition
    const RPadelBottom = RPadelYPosition + RPadelHeight
    const RPadelLeft = RPadelXPosition

    if (
        ballLeft <= LPadelRight &&
        ballRight >= LPadelXPosition &&
        ballBottom >= LPadelTop &&
        ballTop <= LPadelBottom &&
        ballXDirection < 0
    ) {
        ballXDirection = 1
        ballXPosition = LPadelRight
    }

    if (
        ballRight >= RPadelLeft &&
        ballLeft <= RPadelLeft + RPadelWidth &&
        ballBottom >= RPadelTop &&
        ballTop <= RPadelBottom &&
        ballXDirection > 0
    ) {
        ballXDirection = -1
        ballXPosition = RPadelLeft - 2 * ballRadius
    }

    if (ballLeft < 0) {
    rightScore += 1
    resetBall(true)
    } else if (ballRight > windowWidth) {
    leftScore += 1
    resetBall(false)
    }
}


resetBall()

function resetBall(lastScoredRight = false) {
    ballXPosition = windowWidth / 2 - ballRadius
    ballYPosition = windowHeight / 2 - ballRadius

    if (lastScoredRight) {
        ballXDirection = -1
    } else {
        ballXDirection = 1
    }

    ballYDirection = 1

    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
}



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
