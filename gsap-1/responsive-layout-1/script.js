const mobileMenu = document.querySelector('.nav_ham');

const menuList = document.querySelector('.nav-items');

mobileMenu.addEventListener('click', () => {
    menuList.classList.toggle('show')
})