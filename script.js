// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('open');
});

// Smooth reveal on scroll (lightweight)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animation = 'fadeIn 1s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, {threshold:.15});

document.querySelectorAll('section').forEach(sec => observer.observe(sec));