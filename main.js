// Obsługa menu mobilnego
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
});

// Przełączanie trybu ciemnego/jasnego
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', 
        document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Sprawdzenie zapisanego theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || 
    (currentTheme === null && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
}

// Obsługa dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-btn');
    button.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});

// Obsługa scrollowania do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Obserwator Intersection dla animacji scrollowania
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-animation').forEach(el => {
    observer.observe(el);
});

// Inicjalizacja
document.addEventListener('DOMContentLoaded', () => {
    // Wszystkie elementy z klasą scroll-animation powinny być obserwowane
    document.querySelectorAll('.scroll-animation').forEach(el => {
        observer.observe(el);
    });
});