// Documents
const modal =                   document.getElementById('modalStyles');
const modalSection =            document.getElementById('modalSection');
const title =                   document.getElementById('projectTitle');
const modalImages =             document.getElementById('modalImages');
const modalDescription =        document.getElementById('modalDescription');
const modalButtons =            document.getElementById('modalButtons');
const modalTecnologies =        document.getElementById('modalTecnologies');
const modalDate =               document.getElementById('modalDate');
const linkGithub =              document.getElementById('githubLink');
const linkGmail =               document.getElementById('gmailLink');
const linkLinkedln =            document.getElementById('linkedlnLink');

// On Click Social Media
const onClickGithub =   linkGithub.addEventListener('click', () => window.open('https://github.com/fabrizioluna'))
const onClickGmail =    linkGmail.addEventListener('click', () => window.open('mailto:aflunatoledo@gmail.com?Subject=¡Hola%20Fabrizio!'))
const onClickLinkedln = linkLinkedln.addEventListener('click', () => window.open('https://www.linkedin.com/in/fabrisio-luna/'))

// Change theme
const onClickChangeColor = document
  .getElementById('ChangeColor')
  .addEventListener('click', () => changeThemeColor());

// Select project
const onClickProject = document.getElementsByName('project');
onClickProject.forEach((project) => {
  project.addEventListener('click', () => showProject(project));
});

// Close Modal
const closeModal = document
  .getElementById('projectClose')
  .addEventListener('click', () => {
    animationClose().then(() => {
      // Clean modal
      modal.style.display = 'none';
      modalImages.innerHTML = '';
      modalDescription.innerHTML = '';
      modalButtons.innerHTML = '';
      modalTecnologies.innerHTML = '';
      modalDate.innerHTML = '';
    });
  });

// Show project selected
function showProject({ id }) {
  // Comprobate what project it is
  const thisProject = projectArray.find((project) => project.name === id);
  // Enable modal
  modal.style.display = 'block';
  // Animate
  modalSection.animate(
    [{ transform: 'translateY(-300px)' }, { transform: 'translateY(0px)' }],
    {
      duration: 370,
    }
  );
  // Title in the Modal
  title.innerText = `Proyecto: ${thisProject.name}`;
  // Insert images
  thisProject.images.forEach((element) => {
    let img = document.createElement('img');
    img.src = element;
    img.alt = element;
    modalImages.appendChild(img);
  });
  //  Description
  modalDescription.innerHTML = `${thisProject.description}`;
  // Buttons
  if(thisProject.preview == null){
    modalButtons.innerHTML = `
      <a class='modalLinkSingle' href=${thisProject.repo} target="_blank">Visitar repositorio</a>  
    `;
  } else {
    modalButtons.innerHTML = `
      <a class='modalLink' href=${thisProject.preview} target="_blank">Visitar sitio</a>
      <a class='modalLink' href=${thisProject.repo} target="_blank">Visitar repositorio</a>  
    `;
  }
  // Tecnologies used
  thisProject.tecnologies.forEach((element) => {
    let img = document.createElement('img');
    let desp = document.createElement('p');
    desp = element;
    img.src = 'images/circle-check-solid.svg';
    img.alt = 'check';
    modalTecnologies.innerHTML += `
      <li><img src="images/circle-check-solid.svg" alt="" class="circleCheckSVG" /><p>${element}</p></li>
    `;
  });
  modalDate.innerHTML = `<p>Fecha ${thisProject.date}</p>`;
}

// Animation when close modal
function animationClose() {
  const animation = modalSection.animate(
    [{ transform: 'translateY(0px)' }, { transform: 'translateY(-600px)' }],
    {
      duration: 370,
    }
  );
  return animation.finished;
}

// Toggle theme function
function changeThemeColor() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  // Toggle modal
  modalSection.classList.toggle('modalDark');
}

// Projects
const projectArray = [
  {
    name: 'fastpizza',
    description:
      'Proyecto Full-Stack de un e-commerce ficticio de venta de comida. \
      Cuenta con sistemas tales como: Carrito de compras, autenticación de usuarios, \
      descuentos globales, estado en tiempo real de ordenes, dashboard completo para gestión de negocio \
      como finanzas, estadisticas y control total de productos, descuentos, empleados, registros, privilegios, \
      ordenes en tiempo real, y manejo de entregas.',
    date: 2022,
    tecnologies: [
      'Typescript',
      'Next',
      'Nest',
      'Redux',
      'MongoDB',
      'Nodemailer',
      'Socket.io',
      'SASS',
      'Mongoose',
      'Cron-Jobs',
    ],
    repo: 'https://github.com/fabrizioluna/FastPizza',
    preview: 'https://fast-pizza.vercel.app/home',
    images: [
      'images/fastpizza2.png',
      'images/fastpizza3.png',
      'images/fastpizza4.png',
      'images/fastpizza5.png',
    ],
  },
  {
    name: 'nftart',
    description:
      'Proyecto colaborativo de cuatro personas para el bootcamp en Digital House. \
      Aplicación web para la venta y compra de nfts. \
       Trabajamos con una arquitectura MVC y un dashboard programado en React. \
       Se utilizó Trello como tablero de trabajo, MySQL para guardado de datos \
       y Express.js.',
    date: `Dic 2021 - Jun 2022`,
    tecnologies: [
      'Express',
      'EJS',
      'HTML',
      'CSS3',
      'MySQL',
      'Node',
      'React'
    ],
    repo: 'https://github.com/fabrizioluna/DigitalHouse_NFTART',
    preview: 'https://grupo-2-nftart.herokuapp.com',
    images: [
      'images/NFTART.png',
      'images/nftart2.png',
    ],
  },
  {
    name: 'cheatsheet',
    description:
      'Proyecto personal de un cheatsheet para programadores. \
       Trabajado unicamente con Next.js y MongoDB para la base de datos. \
       Utilizando el ServerSide Rendering de Next y todo el potencial de React.\
       Te permite agregar, eliminar o editar secciones y categorias.  \
       También cuenta con sistema de autenticación.',
    date: `2021`,
    tecnologies: [
      'Next',
      'SASS',
      'MongoDB',
      'Mongoose'
    ],
    repo: 'https://github.com/fabrizioluna/cheat_sheet',
    preview: 'https://cheatsheetfabrizio.herokuapp.com',
    images: [
      'images/cheatsheet.png',
      'images/cheatsheet2.png',
      'images/cheatsheet3.png',
      'images/cheatsheet4.png',
    ],
  },
  {
    name: 'moviemania',
    description: 'Proyecto de Frontend en React consumiendo una API pública de Peliculas \
    utilizando tecnologias como React, preprocesador de estilos SASS y Redux para manejo \
    de la información dentro de la aplicación.',
    date: 2021,
    tecnologies: ['React', 'SASS', 'Redux'],
    repo: 'https://github.com/fabrizioluna/MovieMania',
    preview: 'https://fabrizioluna.github.io/MovieMania/#/films',
    images: [
      'images/moviemania.png',
      'images/moviemania2.png',
      'images/moviemania3.png',
      'images/moviemania4.png',
    ],
  },
  {
    name: 'f2p',
    description: 'Proyecto de Frontend en React consumiendo una API pública de Videojuegos \
    utilizando tecnologias como React, CSS3 para estilos y Redux para manejo \
    de la información dentro de la aplicación.',
    date: 2021,
    tecnologies: ['React', 'CSS3', 'Redux'],
    repo: 'https://github.com/fabrizioluna/f2pgames',
    preview: 'https://fabrizioluna.github.io/f2pgames/#/home',
    images: [
      'images/f2p2.png',
      'images/f2p22.png',
      'images/f2p23.png',
      'images/f2p24.png',
    ],
  },
  {
    name: 'pizzaboy',
    description: 'Simple proyecto de pizzeria ficticia realizado con React. \
    Cuenta con sistema de carrito de compras, categorias y detalle de productos.',
    date: 2021,
    tecnologies: ['React', 'CSS3', 'Redux'],
    repo: 'https://github.com/fabrizioluna/pizzaboy',
    preview: null,
    images: [
      'images/pizzaboy1.png'
    ],
  },
  {
    name: 'enacment',
    description: 'Simple proyecto realizado con Angular para prueba tecnica. \
     Realiza consultas en firebase de Google, guardado de datos y usuarios. \
     Montado en ngX-Rocket de Angular y programado con Typescript.',
    date: 2022,
    tecnologies: ['Angular', 'Bootstrap', 'Firebase', 'Typescript'],
    repo: 'https://github.com/fabrizioluna/testAngular-ENACMENT',
    preview: null,
    images: [
      'images/angularTest.png'
    ],
  },
  {
    name: 'mercadoliebre',
    description: 'Proyecto individual para bootcamp de Digital House. \
     Pequeño clon de mercado libre realizado en Express.js',
    date: 2022,
    tecnologies: ['Express', 'Node', 'CSS3', 'HTML5'],
    repo: 'https://github.com/fabrizioluna/DigitalHouse---Split-Individual-2',
    preview: 'https://fabrizio-mercadolibre.herokuapp.com',
    images: [
      'images/mercadoliebre.png',
      'images/mercadoliebre2.png'
    ],
  },
];
