//кнопка мобільного меню 
const navBtn = document.querySelector('.nav-button');
const menuMobile = document.querySelector('.menu__list-mobile');
const body = document.body;
navBtn.addEventListener('click', function(){
    menuMobile.classList.toggle('nav__mobile-open');
    body.classList.toggle('no-scroll');
});