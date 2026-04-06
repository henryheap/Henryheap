body = document.querySelector('body')

colors = ['white', 'rgb(114,242,148']
index = 0

body.addEventListener('click', () => {
    body.style.background = colors[index]
    index = index + 1
    if (index == colors.length) {
        index = 0
    }
    body.style.color = 'black'
})
