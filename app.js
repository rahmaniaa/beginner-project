const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', funstion() {
    menu.classList.toggle('is-active')
    menuLinks.classsList.toggle('active')
})