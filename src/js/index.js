// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
import hamburguesaOn from '/assets/images/hamburguesaon.png';
import hamburguesaOff from '/assets/images/hamburguesaoff.png';
const menuElement = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const mainElement = document.getElementById('main');

function handleClick() {
  menuElement.classList.toggle('menu--show');
  if (menuElement.classList.contains('menu--show')) {
    //  console.log('MENU ABIERTO');
    mainElement.classList.add('main--show');

    menuIcon.src = hamburguesaOn;
  } else {
    // console.log('MENU CERRADO');
    menuIcon.src = hamburguesaOff;
    mainElement.classList.remove('main--show');
  }
}
menuIcon.addEventListener('click', handleClick);
