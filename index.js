const showHideMenu = document.querySelector('.menu-slider');
function showHide() {
  showHideMenu.classList.toggle('active');
}
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', showHide);
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', showHide);