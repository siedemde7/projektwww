// Animacje scrollowania
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animation');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
}

// Animacja logo
function animateLogo() {
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'rotate(360deg)';
            logo.style.transition = 'transform 1s ease';
        });
        
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'rotate(0deg)';
        });
    }
}

// Animacja przycisków
function animateButtons() {
    const buttons = document.querySelectorAll('button, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
}

// Inicjalizacja animacji
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    animateLogo();
    animateButtons();
    
    // Efekt paralaksy dla sekcji hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
        });
    }
});