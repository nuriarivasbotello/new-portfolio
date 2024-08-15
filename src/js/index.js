// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
const buttons = document.querySelectorAll('.btn');

// Iteramos sobre cada botón para añadir los event listeners
buttons.forEach(button => {
  // Añade la clase 'hovered' al pasar el ratón por encima
  button.addEventListener('mouseover', () => {
    button.classList.add('hovered');
  });

  // Elimina la clase 'hovered' al sacar el ratón
  button.addEventListener('mouseout', () => {
    button.classList.remove('hovered');
    button.classList.remove('active'); // Asegura que vuelve a su estado original
  });

  // Añade la clase 'active' al hacer clic
  button.addEventListener('mousedown', () => {
    button.classList.add('active');
  });

  // Elimina la clase 'active' cuando se suelta el botón del ratón
  button.addEventListener('mouseup', () => {
    button.classList.remove('active');
  });
});
// Función para gestionar el tamaño de la ventana
const handleResize = () => {
  const menu = document.getElementById('menu');

  if (window.innerWidth <= 768) {
    // Pantallas pequeñas (móviles)
    menu.style.display = 'none'; // Asegura que el menú está oculto en móviles
  } else {
    // Pantallas grandes (escritorio)
    menu.style.display = 'flex'; // Muestra el menú en pantallas grandes
  }
};
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const imageUrl = item.getAttribute('data-image');
    const hoverImage = item.querySelector('.hover-image');
    hoverImage.style.backgroundImage = `url('${imageUrl}')`;
    hoverImage.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    const hoverImage = item.querySelector('.hover-image');
    hoverImage.style.display = 'none';
  });
});
// Llama a handleResize en la carga inicial y en cada cambio de tamaño
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
