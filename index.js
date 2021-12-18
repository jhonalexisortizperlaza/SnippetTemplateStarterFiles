const menu = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav__sign");

menu.addEventListener("click", () => {
    nav.classList.toggle("nav__menu--visible")
})