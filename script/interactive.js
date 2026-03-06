interactive = document.querySelector('.interactive')
bg = document.querySelector('.bg')


interactive.addEventListner('click', () => {
    bg.style.backgroundImage = "url('../images/burger.avif')"

})


