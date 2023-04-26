const scrollBtn = document.querySelector('.scroll__top');
  window.onscroll = () => {

  if(window.scrollY > 600) {
    scrollBtn.classList.remove('scroll__top-show');
  } else if(window.scrollY < 600) {
      scrollBtn.classList.add('scroll__top-show');
    }
    scrollBtn.onclick = () => {
      window.scrollTo(0, 0);
    };
  
  }
//кнопка мобільного меню 
const navBtn = document.querySelector('.nav-button');
const menuMobile = document.querySelector('.menu__list-mobile');
const body = document.body;
navBtn.addEventListener('click', function(){
    menuMobile.classList.toggle('nav__mobile-open');
    body.classList.toggle('no-scroll');
});
//слайдер 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


function initSelect() {
  //секція recerve, dropDown вибір одного з міст
  const recerveSelect = document.querySelector('.reserve__select');
  const recerveBtn = recerveSelect.querySelector('.reserve__select-btn');
  const options = recerveSelect.querySelectorAll('.reserve__select-option');
  const recervedText = recerveSelect.querySelector('.reserve__select-text');

  recerveBtn.addEventListener("click", () => recerveSelect.classList.toggle('active'));
  options.forEach(option => {
      option.addEventListener("click", (e) => handleOptionClick(e, option));
  });

}