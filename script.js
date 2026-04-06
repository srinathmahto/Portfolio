// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// EmailJS Contact Form Logic
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    // Note: Initialize with your actual EmailJS Public Key
    emailjs.init("YOUR_PUBLIC_KEY");

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Replace with your actual service_id and template_id from EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function () {
                formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                formStatus.style.color = '#10b981'; // Success Green
                contactForm.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, function (error) {
                formStatus.textContent = 'Failed to send message. Please try the Email fallback button.';
                formStatus.style.color = '#ef4444'; // Error Red
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
                console.error("EmailJS Error:", error);
            });
    });
}
