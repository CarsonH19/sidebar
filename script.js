const openBars = document.querySelector('.sidebar-toggle');
const aside = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-btn');

function openSidebar() {
  aside.style.transform = 'translate(0%)';
};

function closeSidebar() {
  aside.style.transform = 'translate(-100%)';
};


openBars.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);

