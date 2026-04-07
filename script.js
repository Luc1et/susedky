// Simple loading animation and interactivity
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const logo = document.querySelector('.logo');

    // Add loading class initially
    card.classList.add('loading');

    // Remove loading class after a short delay for smooth entrance
    setTimeout(() => {
        card.classList.remove('loading');
        card.classList.add('loaded');
    }, 300);

    // Add subtle click effect to logo
    logo.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            logo.click();
        }
    });
});
