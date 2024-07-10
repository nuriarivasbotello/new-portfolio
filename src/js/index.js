// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  function adjustMenu() {
    var menu = document.getElementById('menu');
    if (window.innerWidth >= 768) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

  window.addEventListener('resize', adjustMenu);
  adjustMenu();
});

/* import hamburguesaOn from '/assets/images/hamburguesaon.png';
import hamburguesaOff from '/assets/images/hamburguesaoff.png';
import portadaNuriva from '/assets/images/nuriva/manual.png';
import portadaRevista from '/assets/images/portada_revista.png'; */
/* import bingo from '/assets/images/bingo.png';
import wordle from '/assets/images/wordle.png';
import travel from '/assets/images/travel.jpg';
import photomontage from '/assets/images/photomontages/darth.png';
import holyWeek from '/assets/images/holyweek/holyweek.jpg'; */
/* const menuElement = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const mainElement = document.getElementById('main'); */

/* function handleClick() {
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
} */
// Objeto con los nombres de los elementos y las URL de las imágenes asociadas
/* var imagenes = {
  elemento1: portadaNuriva,
  elemento2: portadaRevista,
  elemento3: wordle,
  elemento4: bingo,
  elemento5: travel,
  elemento6: photomontage,
  elemento7: holyWeek
}; */

// Función para mostrar la imagen asociada al elemento cuando se pasa el ratón sobre él
/* function mostrarImagen(event) {
  var nombreElemento = event.target.id;
  var imagen = document.getElementById('imagen');
  if (nombreElemento in imagenes) {
    imagen.src = imagenes[nombreElemento];
    imagen.style.display = 'block';
  }
} */

// Función para ocultar la imagen cuando se quita el ratón del elemento
/* function ocultarImagen() {
  var imagen = document.getElementById('imagen');
  imagen.style.display = 'none';
} */

// Asignar eventos de mouse a los elementos de lista
/* var elementosLista = document.querySelectorAll('li');
elementosLista.forEach(function (elemento) {
  elemento.addEventListener('mouseenter', mostrarImagen);
  elemento.addEventListener('mouseleave', ocultarImagen);
});

menuIcon.addEventListener('click', handleClick); */
