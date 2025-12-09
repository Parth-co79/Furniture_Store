
const toggle = document.querySelector('.menu_btn'); 
const bar = document.querySelector("ul");

toggle.addEventListener('click', tooglemynav);

function tooglemynav() {
  bar.classList.toggle("active");
}