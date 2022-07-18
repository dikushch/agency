let body = document.querySelector('body');
let menuDrop = document.querySelector('.menu-drop');
let brg = document.querySelector('.brg');
let dropLinks = document.querySelectorAll('.menu-drop__link');

brg.addEventListener('click', () => {
  brg.classList.toggle('open');
  menuDrop.classList.toggle('open');
  body.classList.toggle('lock');
});

for (let link of dropLinks) {
  link.addEventListener('click', () => {
    brg.classList.remove('open');
    menuDrop.classList.remove('open');
    body.classList.remove('lock');
  })
}

let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (pageYOffset > 300) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  autoHeight: true,
  loop: true,

  navigation: {
    nextEl: '.switcher__item-right',
    prevEl: '.switcher__item-left',
  },
});

const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

const callbackOpenBtn = document.querySelector('.header__callback');
const callbackCloseBtn = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

callbackOpenBtn.addEventListener('click', () => {
  popup.classList.add('open');
  body.classList.add('lock');
});

callbackCloseBtn.addEventListener('click', () => {
  popup.classList.remove('open');
  body.classList.remove('lock');
});

popup.addEventListener('click', () => {
  if (event.target === popup) {
    popup.classList.remove('open');
    body.classList.remove('lock');
  }
});