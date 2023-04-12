const showHideMenu = document.querySelector('.menu-slider');
function showHide() {
  showHideMenu.classList.toggle('active');
}
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', showHide);
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', showHide);

//popUp

const projects = [
  { 
    name: "Data Dashboard Healthcare",
    img: "./Assets/printing-work1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "CSS", "Ruby"],
    demoLink: "",
    codeLink: "",
  },
  {
    name: "Website Portfolio ",
    img: "./Assets/printing-work1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["XML", "CSS", "Ruby"],
    demoLink: "",
    codeLink: "",
  },
  {
    name: "Title 3",
    img: "./Assets/gym.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "CSS", "Ruby"],
    demoLink: "",
    codeLink: "",
  },
  {
    name: "Title 4",
    img: "./Assets/gym.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "CSS", "Ruby"],
    demoLink: "",
    codeLink: "",
  },
  {
    name: "Title 5",
    img: "./Assets/gym.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "Bootstrap", "Ruby"],
    demoLink: "",
    codeLink: "",
  },
  {
    name: "Title 6",
    img: "./Assets/printing-work1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ["HTML", "CSS", "Javascript"],
    demoLink: "",
    codeLink: "",
  },
];
console.log(projects);

const works = document.getElementById('card-holder');

for (let i = 0; i < projects.length; i++){

  const cardHolder = document.createElement('div');
  cardHolder.innerHTML = 
  `
  <div class="info-holder">
    <h2 class="project-heading white-font">
    ${ projects[i].name}
    </h2>
    <p class="card-description white-font">
    ${ projects[i].description}
    </p>
    <ul class="tag-list white-font">

      <li class="card-feature-items">${ projects[i].tags[0]}</li>
      <li class="card-feature-items">${ projects[i].tags[1]}</li>
      <li class="card-feature-items">${ projects[i].tags[2]}</li>
    </ul>
  </div>
  <div class="button-section">
    <a
      id="cardButton${i}"
      class="pop card-button dark-font seeInfo"
      href="#popUp"
      >See Project</a
    >
  </div>
    `;
    cardHolder.classList.add('work-card')
  works.appendChild(cardHolder);
}
