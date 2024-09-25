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

const images = {
  image1: 'assets/images/project-nuriva.png',
  image2: 'assets/images/project-sushi.png',
  image3: 'assets/images/project-nihon.png',
  image4: 'assets/images/project-doctorpad.png',
  image5: 'assets/images/mockupweb.png',
  image6: './images/image6.jpg'
};
document.querySelectorAll('.project').forEach(project => {
  const link = project.querySelector('.project-info');

  // Solo añade el evento si el ancho de la ventana es mayor a 768px
  if (window.innerWidth > 768) {
    project.addEventListener('mouseenter', e => {
      const imgKey = link.getAttribute('data-image'); // Obtiene el identificador de la imagen del atributo data-image

      const hoverImg = document.getElementById('hover-img');
      hoverImg.src = images[imgKey]; // Obtiene la ruta de la imagen usando el identificador

      const hoverImageDiv = document.querySelector('.hover-image');
      hoverImageDiv.style.display = 'block'; // Muestra la imagen
    });

    project.addEventListener('mouseleave', () => {
      const hoverImageDiv = document.querySelector('.hover-image');
      hoverImageDiv.style.display = 'none'; // Oculta la imagen
    });
  }

  // Manejo del clic en dispositivos móviles
  project.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      const hoverImageDiv = document.querySelector('.hover-image');
      hoverImageDiv.style.display = 'none'; // Asegúrate de ocultar la imagen
      // No se llama a e.preventDefault() para que el enlace funcione
    }
  });
});

// Añadir un evento de resize para manejar la adaptación del hover en caso de cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  const hoverImageDiv = document.querySelector('.hover-image');
  if (window.innerWidth <= 768) {
    hoverImageDiv.style.display = 'none'; // Asegúrate de ocultar la imagen en móviles
  }
});

// Añadir un evento de resize para manejar la adaptación del hover en caso de cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  const hoverImageDiv = document.querySelector('.hover-image');
  if (window.innerWidth <= 768) {
    hoverImageDiv.style.display = 'none'; // Asegúrate de ocultar la imagen en móviles
  }
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
