// script.js – FIXED: Uppercase NET (lowercase was the killer)
window.addEventListener('load', function () {
    console.log('Window loaded, checking Vanta...');
    console.log('VANTA object:', window.VANTA); // Debug
    if (document.getElementById('hero') && window.VANTA && typeof VANTA.NET === 'function') { // UPPERCASE NET
        console.log('Init Vanta...');
        try {
            VANTA.NET({ // UPPERCASE CALL
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                // minHeight: window.innerHeight,
                // minWidth: window.innerWidth,
                minHeight: 200.00,
                minWidth: 200.00,
                // scale: 1.0,
                // scaleMobile: 1.0,
                points: 12,
                color: 0x00eaff,
                backgroundColor: 0x0a0f1f,
                points: 12,
                maxDistance: 20,
                spacing: 18,
                showDots: true,
                // opacity: 0.7
            });
            console.log('Vanta neural ACTIVE - Check hero for blue lines!');
        } catch (e) {
            console.error('Vanta init error:', e);
        }
    } else {
        console.error('Vanta failed: NET function missing. VANTA:', window.VANTA);
    }
});

// Smooth scrolling (unchanged)
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form (unchanged)
document.querySelectorAll('.contact-form').forEach(f => {
    f.addEventListener('submit', e => {
        e.preventDefault();
        alert('Sent!');
        f.reset();
    });
});