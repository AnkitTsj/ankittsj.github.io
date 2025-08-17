const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const elementsToAnimate = document.querySelectorAll('.project-card, #about, .profile-section, .contact-card');

elementsToAnimate.forEach(element => {
    observer.observe(element);
});

function typeWriter(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    const speed = 100; 

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const title = document.querySelector('.hero-section h2');
if (title) {
    typeWriter(title);
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
            
            navLinks.forEach(link => link.classList.remove('active'));
            
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, { threshold: 0.5 }); 

sections.forEach(section => {
    navObserver.observe(section);
});