const menuBtn = document.querySelector('.mobile-navbar-btn');
const navHeader = document.querySelector('.header');

const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};

menuBtn.addEventListener('click', () => toggleNavbar());
