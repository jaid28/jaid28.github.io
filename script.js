// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
});

// Smooth scrolling for navigation (excluding external links like Resume PDF)
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const navMenu = document.querySelector('.nav-menu');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
            // Close the menu after clicking a link
            navMenu.classList.remove('active');
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form submission with Web3Forms
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully! I’ll get back to you soon.');
            this.reset();
        } else {
            alert('Failed to send message. Please try again.');
            console.error('Web3Forms Error:', data);
        }
    })
    .catch(error => {
        alert('An error occurred. Please try again later.');
        console.error('Fetch Error:', error);
    });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
