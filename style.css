// Log a welcome message
console.log("Welcome to Vaithiyamanickam's Portfolio!");

// Scroll animation for project cards
const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
        }
    });
});

// Initialize cards hidden
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
});
