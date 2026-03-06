interactive = document.querySelector('.interactive')
bg = document.querySelector('.bg')


bg.addEventListener('click', () => {
    bg.style.backgroundImage = "url('../images/burger.avif')"
    bg.style.backgroundImage = "url('../images/pizza.avif')"
    bg.style.backgroundImage = "url('../images/salad.avif')"
})


