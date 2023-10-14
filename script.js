const openBars = document.querySelector('.sidebar-toggle');
const aside = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');
const footer = document.querySelector('footer');

function openSidebar() {
  aside.style.transform = 'translate(0%)';
  footer.classList.add('fadeOut');
};

function closeSidebar() {
  aside.style.transform = 'translate(-100%)';
  footer.classList.remove('fadeOut');
};


openBars.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);

