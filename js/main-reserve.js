
// початкові картки, з них не видаляємо картки, filter не видаляє з cards а створює новий відфільтрований масив
let cards = [
  {
    image: 'image/reserve/reserve-1.png',
    title: 'Незвідана Бакота',
    description: "У Хмельницькій області розташований загублений край - Бакота. Мальовничий каньйон з давньою історією захоплю є своїми просторами та незвичною атмосферою. Бджільництво, свіжий мед із польових трав, дотик до природи.",
    type: 'bakota',
    link: 'reservation.html',
  },
  {
    image: 'image/reserve/reserve-2.png',
    title: 'Полонини Карпат',
    description: "Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. Справжні українські гори, власноручне сироваріння на полонині, водоспади та дерева чекають Вас і з радістю зустрінуть.",
    type: 'carpathians',
    link: 'reservation.html',
  },
  {
    image: 'image/reserve/reserve-3.png',
    title: 'Автентична Київщина',
    description: "Неподалік центра Києва розташувалось автентичне українське село на території однойменного села Пирогово. Дерев’яні млини, запашний хліб, приготовлений своїми руками, українські пісні та багато іншого чекає навас уже зараз.",
    type: 'kyiv',
    link: 'reservation.html',
  },
  {
    image: 'image/reserve/reserve-4.png',
    title: 'Нетипова Одещина',
    description: "В Одеській області знаходиться мальовниче містечко Вилкове. Його ще називають «українською Венецією». Вилкове - це містечко на воді, весь в каналах. Розташоване в місці, де зустрічаються річка Дунай і Чорне море.",
    type: 'odessa',
    link: 'reservation.html',
  },
];

let recerveSelect = document.querySelector('.reserve__select');
recerveBtn = recerveSelect.querySelector('.reserve__select-btn');
options = recerveSelect.querySelectorAll('.reserve__select-option');
recervedText = recerveSelect.querySelector('.reserve__select-text');

// початкові картки зберігаєм в renderedCards, в renderedCards зберігаєм тільки відфільтровані елементи 
let renderedCards = cards;
//

const initApp = () => {
  // відображаєм всі картки на початку
  populateCards();
  initSelect();

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
}
window.addEventListener('load', initApp);

function populateCards() {
  const parent = document.querySelector('.recerve__content');
  if (parent) {
    parent.innerHTML = '';
    renderedCards.forEach((item) => {
      parent.appendChild(createCard(item));
    })
  }
}
//кнопка мобільного меню 
const navBtn = document.querySelector('.nav-button');
const menuMobile = document.querySelector('.menu__list-mobile');
const body = document.body;
navBtn.addEventListener('click', function(){
    menuMobile.classList.toggle('nav__mobile-open');
    body.classList.toggle('no-scroll');
});

function initSelect() {
  //секція recerve, dropDown вибір одного з міст

  console.log('recerveSelect: ', recerveSelect)

  recerveBtn.addEventListener("click", () => recerveSelect.classList.toggle('active'));
  options.forEach(option => {
      option.addEventListener("click", (e) => handleOptionClick(e, option));
  });
}

function handleOptionClick(e, option) {
  if (e.target.getAttribute('data-type') === 'all') {
    renderedCards = cards;
  }
  else {
    // присвоюєм renderedCards відфільтровані картки
    renderedCards = getFilteredCards(e);
  }
  populateCards();
  let selectedOption = option.querySelector(".reserve__select-name").innerText;
  recervedText.innerText = selectedOption;
  recerveSelect.classList.remove('active')
}

function getFilteredCards(e) {
 return cards.filter((item) => {
    if (item.type === e.target.getAttribute('data-type')) {
      //  якщо повертає true то картка не видаляється, якщо false - видаляється
      return true;
    }
    else {
      return false;
    }
  })
}

// звичайний массив закинути через appendChild не можна, для цього потрібна html розмітка
function createCard(obj) {
  const card = document.createElement('div');
  card.classList.add('recerve__card');
  card.innerHTML = `
    <div class="card__image">
      <img src="${obj.image}" alt="">
    </div>
    <div class="card__content">
      <div class="card__content-title">${obj.title}</div>
      <div class="card__content-text">
          <p>${obj.description}</p> 
      </div>
      <div class="card__content-button">
          <a href="${obj.link}" class="card__btn" target='_blank'>Детальніше</a>
      </div>
    </div>
  `;

  // повертаєм новостворену картку інакше функція поверне undefined замість картки
  return card;
}