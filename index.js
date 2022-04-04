const navbar_menu = document.querySelector(".navbar-menu");
const navbar_link = document.querySelector(".navbar-link");
const navbar_list = document.querySelector(".navbar-list");

navbar_list.addEventListener("click", () => {
  navbar_menu.classList.toggle("active");
  navbar_link.classList.toggle("active");
});
