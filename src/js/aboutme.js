// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
const menuElement = document.getElementById('menu-aboutme');
const menuIcon = document.getElementById('menu-icon');
const aboutmeElement = document.getElementById('main-aboutme');

function handleClick() {
  menuElement.classList.toggle('menu--show');
  if (menuElement.classList.contains('menu--show')) {
    //  console.log('MENU ABIERTO');
    aboutmeElement.classList.add('about--show');
    menuIcon.src = '../assets/images/hamburguesaon.png';
  } else {
    // console.log('MENU CERRADO');
    menuIcon.src = '../assets/images/hamburguesaoff.png';
    aboutmeElement.classList.remove('about--show');
  }
}

menuIcon.addEventListener('click', handleClick);

// const button = document.getElementById('button');

// button.addEventListener('click', () => {
//   console.log('BUTTON CLICKED');
// });
