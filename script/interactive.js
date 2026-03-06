interactive = document.querySelector('.interactive')
bg = document.querySelector('.bg')


interactive.addEventListener('click', () => {
    bg.style.backgroundImage = "url('../images/burger.avif')"
    bg.style.backgroundImage = "url('../images/salad.avif')"
    bg.style.backgroundImage = "url('../images/pizza.avif')"
})


