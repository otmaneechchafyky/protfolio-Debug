const showHideMenu = document.querySelector('.menu-slider');
function showHide() {
  showHideMenu.classList.toggle('active');
}
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', showHide);
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', showHide);

//  Work Projects Data

const projects = [
  {
    name: 'Multi Post Stories',
    img: './Assets/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: './Assets/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
    'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: './Assets/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    img: './Assets/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: './Assets/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    name: 'Multi Post Stories',
    img: './Assets/ex.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['XML', 'CSS', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
];

//  Generate Work section from Js file

const works = document.getElementById('card-holder');

for (let i = 0; i < projects.length; i += 1) {
  const cardHolder = document.createElement('div');
  cardHolder.innerHTML = `
  <div class="info-holder">
    <h2 class="project-heading white-font">
    ${projects[i].name}
    </h2>
    <p class="card-description white-font">
    ${projects[i].description2}
    </p>
    <ul class="tag-list white-font">

      <li class='card-feature-items'>${projects[i].tags[0]}</li>
      <li class='card-feature-items'>${projects[i].tags[1]}</li>
      <li class='card-feature-items'>${projects[i].tags[2]}</li>
    </ul>
  </div>
  <div class='button-section'>
    <a
      id='cardButton${i}'
      class='pop card-button dark-font seeInfo'
      href='#popUp'
      >See Project</a
    >
  </div>
    `;
  cardHolder.classList.add('work-card');
  works.appendChild(cardHolder);
}
