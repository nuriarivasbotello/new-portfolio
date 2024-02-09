// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
const menuElementAbout = document.getElementById('menu-aboutme');
const menuIconAbout = document.getElementById('menu-icon-about');
const aboutmeElement = document.getElementById('main');

function handleClick() {
  menuElement.classList.toggle('menu--show');
  if (menuElementAbout.classList.contains('menu--show')) {
    //  console.log('MENU ABIERTO');
    aboutmeElement.classList.add('about--show');
    menuIconAbout.src = './assets/images/hamburguesaon.png';
  } else {
    // console.log('MENU CERRADO');
    menuIconAbout.src = './assets/images/hamburguesaoff.png';
    aboutmeElement.classList.remove('about--show');
  }
}

menuIconAbout.addEventListener('click', handleClick);

// const button = document.getElementById('button');

// button.addEventListener('click', () => {
//   console.log('BUTTON CLICKED');
// });
