// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
const buttons = document.querySelectorAll('.btn');
const mainImage = document.getElementById('main-image');
const overlayImages = document.getElementById('overlay-images');
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

document.addEventListener('DOMContentLoaded', function () {
  const projectInfos = document.querySelectorAll('.project-info');
  const hoverImage = document.getElementById('hover-image');

  // Definir las rutas de las imágenes en una constante
  const imagePaths = {
    image1: 'assets/images/project-nuriva.svg',
    image2: './images/image2.jpg',
    image3: './images/image3.jpg',
    image4: './images/image4.jpg',
    image5: './images/image5.jpg',
    image6: './images/image6.jpg'
  };

  function handleMouseEnter(event) {
    const projectInfo = event.currentTarget;
    const imageKey = projectInfo.dataset.image;
    const imageUrl = imagePaths[imageKey];

    // Actualizar y mostrar la imagen de hover
    hoverImage.src = imageUrl;
    hoverImage.style.display = 'block';
  }

  function handleMouseLeave() {
    // Ocultar la imagen de hover
    hoverImage.style.display = 'none';
  }

  projectInfos.forEach(info => {
    info.addEventListener('mouseenter', handleMouseEnter);
    info.addEventListener('mouseleave', handleMouseLeave);
  });
});

mainImage.addEventListener('click', function () {
  if (overlayImages.classList.contains('show')) {
    overlayImages.classList.remove('show');
    overlayImages.classList.add('hide');
  } else {
    overlayImages.classList.remove('hide');
    overlayImages.classList.add('show');
  }
});

document.addEventListener('click', function (event) {
  if (
    !mainImage.contains(event.target) &&
    !overlayImages.contains(event.target)
  ) {
    if (overlayImages.classList.contains('show')) {
      overlayImages.classList.remove('show');
      overlayImages.classList.add('hide');
    }
  }
});
