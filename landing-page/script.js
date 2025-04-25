// Add event listener to contact form
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send form data (You will need to implement a backend to handle this)
    // For now, let's just log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display a success message (you can customize this)
    alert('Pesan Anda telah terkirim!');
});

// Smooth scrolling to sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});