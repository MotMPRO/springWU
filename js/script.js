var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
});