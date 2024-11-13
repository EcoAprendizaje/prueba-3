
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuButton.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Cerrar menú al hacer click en un enlace (móvil)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuButton.textContent = '☰';
        }
    });
});






