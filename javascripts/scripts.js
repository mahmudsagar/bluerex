const navbutton = document.querySelector("#nav-toggler");
const sidebar = document.querySelector(".sidenav");
navbutton.addEventListener("click", () => sidebar.classList.toggle("show-sidenav"));
