var burgerMenu = document.querySelector('.burger-menu');
var phoneAppNav = document.querySelector('.phone-menu-nav');
var phoneAppnNabClose = document.querySelector('.phone-menu-close');

burgerMenu.addEventListener('click', function() {
    phoneAppNav.classList.toggle('open-menu');
    if(phoneAppNav.classList.contains('open-menu')){
        phoneAppNav.style.trasnform = 'translateX(100%)';
    } else{
        phoneAppNav.style.trasnform = 'translateX(0%)';
    }
});

phoneAppnNabClose.addEventListener('click', function() {
    phoneAppNav.classList.remove('open-menu');
    phoneAppNav.style.transform = 'translateX(0%)';
});