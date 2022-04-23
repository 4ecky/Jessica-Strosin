// Меню бургер
const burger = document.querySelector('.header__burger');
const menuNav = document.querySelector('.header__menu');
const navLink = document.querySelectorAll('.header__menu-link');
const menuClose = document.querySelector('.header__close-menu');

burger.addEventListener('click', mobileMenu);

function mobileMenu(){
  burger.classList.add('_active');
  menuNav.classList.add('_open');
  menuClose.classList.add('_active');
  document.body.classList.add('_lock');
};

// при нажатии на X, меню закрывается 
menuClose.addEventListener('click', closeMenu);

function closeMenu() {
  burger.classList.toggle('_active');
  menuNav.classList.toggle('_open');
  menuClose.classList.remove('_active');
  document.body.classList.remove('_lock');
};

// при нажатии на ссылку, меню закрывается
navLink.forEach(n => n.addEventListener('click', closeMenuForLink));

function closeMenuForLink(){
  burger.classList.remove('_active');
  menuNav.classList.remove('_open');
  menuClose.classList.remove('_active');
  document.body.classList.remove('_lock');
};

// плавная прокрутка к разделам
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

// POP-UP
// ловим кнопку
const openPopUpHeader = document.querySelector('.button__header');
// ловим кнопку 2
const openPopUp = document.querySelector('.open__pop-up');

// ловим X
const closePopUp = document.querySelector('.pop-up__close');
// ловим popUp
const popUp = document.querySelector('.pop-up');


// когда нажимаем на кнопку, то присваивается класс active для popUp 2 функции
openPopUpHeader.addEventListener('click', function (e) {
  e.preventDefault();
  // на попап вешаем класс
  popUp.classList.add('active');
  document.body.classList.toggle('_lock');
});
openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  // на поп ап вешаем класс
  popUp.classList.add('active');
  document.body.classList.toggle('_lock');
});
// когда закрываем окно, то active убирается
closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
  document.body.classList.remove('_lock');
});