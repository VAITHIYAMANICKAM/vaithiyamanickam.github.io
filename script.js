// Initialize AOS for scroll animations
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Counter animation for stats
const counters = document.querySelectorAll('.count');
const observerOptions = {
    threshold: 0.5
};

const countObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const targetText = counter.innerText;
            const target = parseInt(targetText.replace(/[^\d]/g, ''));
            const suffix = targetText.replace(/\d/g, '');
            let current = 0;
            const increment = target / 100;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.floor(current) + suffix;
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target + suffix;
                }
            };
            
            updateCounter();
            countObserver.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    countObserver.observe(counter);
});

// Scroll animation for project cards
const cards = document.querySelectorAll('.project');

if (cards.length > 0) {
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
}

// Welcome message
console.log("Welcome to Vaithiyamanickam's Portfolio!");
