const openBars = document.querySelector(".sidebar-toggle");
const aside = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-btn");
const footer = document.querySelector("footer");

function openSidebar() {
  aside.style.transform = "translate(0%)";
  footer.classList.remove('fadeIn');
  footer.classList.add("fadeOut");
  setTimeout(() => {
    footer.classList.add("displayNone");
  }, 500);
}

function closeSidebar() {
  aside.style.transform = "translate(-100%)";
  footer.classList.remove("fadeOut");
  footer.classList.remove("displayNone");
  footer.classList.add("transparent");
  setTimeout(() => {
    footer.classList.remove("transparent");
    footer.classList.add("fadeIn");
  }, 400);
}

openBars.addEventListener("click", openSidebar);
closeButton.addEventListener("click", closeSidebar);
