const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-items');

hamburger.addEventListener('click',() => {
    navUL.classList.toggle('show');
});