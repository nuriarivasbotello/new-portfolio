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
// Objeto con los nombres de los elementos y las URL de las imágenes asociadas
var imagenes = {
  elemento1: 'imagen1.jpg',
  elemento2: 'imagen2.jpg',
  elemento3: 'imagen3.jpg'
};

// Función para mostrar la imagen asociada al elemento cuando se pasa el ratón sobre él
function mostrarImagen(event) {
  var nombreElemento = event.target.id;
  var imagen = document.getElementById('imagen');
  if (nombreElemento in imagenes) {
    imagen.src = imagenes[nombreElemento];
    imagen.style.display = 'block';
  }
  setTimeout(function () {
    imagen.style.display = 'none'; // Ocultar la imagen después de 2 segundos
  }, 2000);
}

// Asignar eventos de mouse a los elementos de lista
var elementosLista = document.querySelectorAll('li');
elementosLista.forEach(function (elemento) {
  elemento.addEventListener('mouseover', mostrarImagen);
});
menuIcon.addEventListener('click', handleClick);
