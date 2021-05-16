const hamburgerIcon = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});