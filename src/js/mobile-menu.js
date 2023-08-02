const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');


const toggleMobileMenu = (e)=>{
    e.preventDefault();
    if (e.target === burger || e.target === burger.firstElementChild ) {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        // headerContacts.classList.toggle('active');
        body.classList.toggle('lock');
    }
};

burger.addEventListener('click', toggleMobileMenu);