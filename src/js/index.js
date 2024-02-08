// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
const menuElement = document.getElementById('menu');
const buttonElement = document.getElementById('toggle-menu');
const menuIcon = document.getElementById('menu-icon');
const mainElement = document.getElementById('main');

function handleClick() {
  menuElement.classList.toggle('menu--show');
  if (menuElement.classList.contains('menu--show')) {
    //  console.log('MENU ABIERTO');
    mainElement.classList.add('main--show');
    menuIcon.src = './assets/images/hamburguesa on.png';
  } else {
    // console.log('MENU CERRADO');
    menuIcon.src = './assets/images/hamburguesa off.png';
    mainElement.classList.remove('main--show');
  }
}

menuIcon.addEventListener('click', handleClick);
// const button = document.getElementById('button');

// button.addEventListener('click', () => {
//   console.log('BUTTON CLICKED');
// });
