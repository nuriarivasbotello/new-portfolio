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
function updateSocialIcons() {
  const screenWidth = window.innerWidth;

  const gmailIcon = document.getElementById('icon-gmail');
  const linkedinIcon = document.getElementById('icon-linkedin');
  const githubIcon = document.getElementById('icon-github');
  const behanceIcon = document.getElementById('icon-behance');
  const instagramIcon = document.getElementById('icon-instagram');

  if (screenWidth < 768) {
    // Cambiar a iconos para móvil
    gmailIcon.src = 'assets/images/IconGmailMvl.svg';
    linkedinIcon.src = 'assets/images/IconLkMvl.svg';
    githubIcon.src = 'assets/images/IconGitMvl.svg';
    behanceIcon.src = 'assets/images/IconBhMvl.svg';
    instagramIcon.src = 'assets/images/IconInstMvl.svg';
  } else if (screenWidth < 1024) {
    // Cambiar a iconos para tablet
    gmailIcon.src = 'assets/images/IconGmailMvl.svg';
    linkedinIcon.src = 'assets/images/IconLkMvl.svg';
    githubIcon.src = 'assets/images/IconGitMvl.svg';
    behanceIcon.src = 'assets/images/IconBhMvl.svg';
    instagramIcon.src = 'assets/images/IconInstMvl.svg';
  } else {
    // Cambiar a iconos para desktop
    gmailIcon.src = 'assets/images/IconGmail.svg';
    linkedinIcon.src = 'assets/images/IconLk.svg';
    githubIcon.src = 'assets/images/IconGit.svg';
    behanceIcon.src = 'assets/images/IconBh.svg';
    instagramIcon.src = 'assets/images/IconInst.svg';
  }
}

// Ejecutar al cargar la página
updateSocialIcons();

// Ejecutar cada vez que se redimensiona la ventana
window.addEventListener('resize', updateSocialIcons);

window.addEventListener('scroll', function () {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  if (window.innerWidth >= 1024) {
    // Ejecutar solo en pantallas de 1024px o más
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

document
  .getElementById('scroll-to-top')
  .addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
