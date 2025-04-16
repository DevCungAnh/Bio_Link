particlesJS('particles', {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffcc00'] },
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: true },
        size: { value: 5, random: true },
        line_linked: { enable: true, distance: 100, color: '#ffffff', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 4, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 160, line_linked: { opacity: 0.8 } }, push: { particles_nb: 5 } }
    },
    retina_detect: true
});

// 3D tilt effect for profile card
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.profile-card');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = y / 40;
    const rotateY = -x / 40;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener('mouseleave', () => {
    const card = document.querySelector('.profile-card');
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
});

// Ripple effect on button click
document.querySelectorAll('.social-link').forEach(button => {
    button.addEventListener('click', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--ripple-x', `${x}px`);
        button.style.setProperty('--ripple-y', `${y}px`);
        button.classList.add('ripple');

        setTimeout(() => {
            button.classList.remove('ripple');
        }, 600);
    });
});