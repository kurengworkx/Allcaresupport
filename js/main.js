// Modals
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

// Close modals when clicking outside
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Calculate eligibility button steps interaction
const calcOptions = document.querySelectorAll('.calc-step button');
calcOptions.forEach(btn => {
    btn.addEventListener('click', function() {
        // Find parent step container
        const step = this.closest('.calc-step');
        
        // Remove active class from buttons in this step
        step.querySelectorAll('button').forEach(b => {
            b.classList.remove('btn-primary');
            b.classList.add('btn-outline');
        });
        
        // Add active style to clicked button
        this.classList.remove('btn-outline');
        this.classList.add('btn-primary');
        
        // Simple demo logic to show success message inside calculator
        setTimeout(() => {
            step.innerHTML = `
                <div class="text-center">
                    <div style="color: var(--clr-accent-600); width: 48px; height: 48px; border-radius: 50%; background: var(--clr-accent-100); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                        <i data-lucide="check" style="width: 24px; height: 24px;"></i>
                    </div>
                    <h4 style="margin-bottom: 8px;">Great news!</h4>
                    <p style="color: var(--clr-text-muted); margin-bottom: 16px;">Based on your answers, you may be eligible. Let's get you connected with our Support Coordinators.</p>
                    <button class="btn btn-primary w-full" onclick="closeModal('calculatorModal'); setTimeout(() => openModal('bookingModal'), 300)">Book a Call Now</button>
                </div>
            `;
            // Re-initialize any new icons
            if(window.lucide) {
                window.lucide.createIcons();
            }
        }, 300);
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Chat Widget Toggle
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
}
