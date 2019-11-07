function burger() {
    let menu = document.querySelector('.burger')
    menu.classList.toggle('burger_active')
    let menuNav = document.querySelector('.header__nav')
    menuNav.classList.toggle('burger__nav')
}