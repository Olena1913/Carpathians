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

window.addEventListener('click', function(e){
  let counter;
  if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {

    counterRooms = e.target.closest('.reservation__rooms-count');
    counter = counterRooms.querySelector('[data-counter]');
  }
  if(e.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }
  if(e.target.dataset.action === 'minus') {
    if(parseInt(counter.innerText)>1) {
      counter.innerText = --counter.innerText;
    }
  }
});

