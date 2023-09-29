const NavMenu = document.querySelector(".navMenu");
const hembergun = document.querySelector(".fa-bars");

hembergun.addEventListener('click', () => {
     hembergun.classList.toggle('fa-xmark');
     NavMenu.classList.toggle('active');
});