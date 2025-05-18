
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    // Ustawienie motywu przy ładowaniu strony
    if (savedTheme === 'dark') { document.body.classList.add('dark-mode'); }
    else if (savedTheme === 'light') { document.body.classList.remove('dark-mode'); }
        document.body.classList.add('dark-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Obsługa menu mobilnego
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded',
                menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Accordion content loading (zaklęcia)
    document.querySelectorAll('.accordion-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            content.innerHTML = `
                <p>${index === 0 ? 'Expelliarmus, Protego, Expecto Patronum' : 'Avada Kedavra, Crucio, Imperio'}</p>
            `;
            content.classList.toggle('active');
        });
    });

    // Intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animation').forEach(el => observer.observe(el));
});