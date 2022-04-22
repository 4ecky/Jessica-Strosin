// МЕНЮ БУРГЕР
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const closeMenu = document.querySelector('.header__close-menu')
// Меню открывается
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    // iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    closeMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  });

  // Меню закрывается
  closeMenu.addEventListener('click', function () {
    menuBody.classList.remove('_active');
    closeMenu.classList.toggle('_active');
    document.body.classList.remove('_lock');
  });

}

// Переход к разделам
const menuLinks = document.querySelectorAll('.header__menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menu__link => {
    menu__link.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        document.body.classList.remove('_lock');
        closeMenu.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}

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