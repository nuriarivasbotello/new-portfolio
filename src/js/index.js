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
// Función para mostrar la imagen asociada al nombre cuando pasas el cursor sobre el elemento
function mostrarImagen(event) {
  var nombreElemento = event.target.getAttribute('data-imagen');
  var imagen = document.getElementById('imagen');
  if (nombreElemento) {
    imagen.src = nombreElemento;
    imagen.style.display = 'block';
  }
}

// Función para ocultar la imagen cuando sacas el cursor del elemento
function ocultarImagen() {
  var imagen = document.getElementById('imagen');
  imagen.style.display = 'none';
}

// Obtener la lista de nombres
var listaNombres = document.getElementById('lista').getElementsByTagName('li');

// Asignar eventos de ratón a cada elemento de la lista
for (var i = 0; i < listaNombres.length; i++) {
  listaNombres[i].addEventListener('mouseover', mostrarImagen);
  listaNombres[i].addEventListener('mouseout', ocultarImagen);
}
menuIcon.addEventListener('click', handleClick);
