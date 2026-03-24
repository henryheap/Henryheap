screens = document.querySelectorAll('.screen')
choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
start_btn = document.getElementById('start-btn')
game_container = document.querySelector('.game-container')
scoreEl = document.getElementById('score')
timeEl = document.getElementById('time')
messageEl = document.getElementById('message')
score = 0
seconds = 0

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

for (let i = 0; i < choose_insect_btns.length; i = i + 1) {
    choose_insect_btns[i].addEventListener('click', () => {
        screens[1].classList.add('up')
        img = choose_insect_btns[i].querySelector('img')
        src = img.getAttribute('src')
        alt = img.getAttribute('alt')
        startGame()
    })
}

function startGame() {
    setTimeout(createInsect, 1000)
    setInterval(increaseTime, 1000)
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x,y} = getRandomL()
    //insect.innerHTML = `<img src="${src}" alt="${alt}" style="transform: rotate(${Math.random()*360}deg)">`
    //const {
        //x,
        //y
    //} = getRandomL()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    //insect.innerHtml = `<img src="images/roachbg.png" alt="Roach">`
    insect.innerHTML = `<img src="${src}" alt="${alt}" style="transform: rotate(${Math.random()*360}deg)">`
    game_container.appendChild(insect)
    insect.addEventListener('click', () => {
        catchInsect(insect)
    })
}

function getRandomL() {
    width = window.innerWidth;
    height = window.innerHeight;
    x = Math.random() * (width - 200) + 100
    y = Math.random() * (height - 200) + 100
    return (x, y)
}

function catchInsect(insect) {
    increaseScore()
    insect.classList.add('caught')
    setTimeout(() => insect.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}


function increaseScore() {
    score = score + 1
    scoreEl.innerHTML = `Score: ${score}`
}


function increaseTime() {
    seconds = seconds + 1
    m = Math.floor(seconds/60)
    s = seconds % 60
    if (m<10){
        m = `0${m}`
    }
    if (s<10){
        s = `0${s}`
    }

    timeEl.innerHTML = `Time: ${m}:${s}`
}
