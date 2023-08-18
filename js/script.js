const btn = document.querySelector('.js-menu-btn')
const nav = document.querySelector('.js-menu')

btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})