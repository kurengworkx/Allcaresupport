// Scroll Reveal Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If this is the stats card, trigger counting animation
                const countElement = entry.target.querySelector('[data-count]');
                if (countElement && !countElement.classList.contains('counted')) {
                    startCounter(countElement);
                    countElement.classList.add('counted');
                }

                // observer.unobserve(entry.target); // keep it observed if we want to reverse animation, but usually unobserve is better for performance once revealed
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
});

// Animated Counter function
function startCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // ms
    const step = 20; // ms
    const frames = duration / step;
    const increment = target / frames;
    
    let current = 0;
    
    const countInterval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(countInterval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, step);
}
