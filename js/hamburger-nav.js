let openMenu = document.querySelector("body nav:nth-of-type(2) > button");
let closeMenu = document.querySelector("body nav:nth-of-type(2) > nav button");

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

function toggleMenu() { 
let menu = document.querySelector("body nav:nth-of-type(2) > nav");
menu.classList.toggle("open");
}