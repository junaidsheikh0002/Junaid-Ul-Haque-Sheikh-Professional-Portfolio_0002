document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // ScrollReveal animations
    ScrollReveal().reveal('#home', { delay: 200, distance: '50px', origin: 'top' });
    ScrollReveal().reveal('#about', { delay: 300, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('.project-card', { delay: 400, distance: '50px', origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('#contact', { delay: 500, distance: '50px', origin: 'right' });

    // Typing effect for the job title
    const jobTitle = document.querySelector('#home p');
    const text = jobTitle.textContent;
    jobTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            jobTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});