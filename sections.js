document.addEventListener('DOMContentLoaded', () => {
    // Animation des cartes d'événements
    const eventCards = document.querySelectorAll('.event-card');
    animateElements(eventCards);

    // Animation des cartes de clubs
    const clubCards = document.querySelectorAll('.club-card');
    animateElements(clubCards);

    // Animation des cartes de programmes
    const programCards = document.querySelectorAll('.program-card');
    animateElements(programCards);

    // Handling form visibility and form submission
    const contactLink = document.getElementById('contact-link'); // Assuming this is your contact link ID
    const form = document.getElementById('contact-form');
    const messageElement = document.getElementById('form-message');

    // Show the contact form when the link is clicked (if it was hidden before)
    contactLink.addEventListener('click', () => {
        form.classList.add('fade-in'); // Apply fade-in class for a smooth transition (if needed)
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission for demo purposes
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const reason = document.getElementById('reason').value;

        // Basic validation (you can add more if needed)
        if (!firstName || !lastName || !email || !phone || !reason) {
            messageElement.textContent = "All fields are required!";
            messageElement.classList.add('error');
            messageElement.classList.remove('success');
        } else {
            messageElement.textContent = "Thank you for contacting us. We'll get back to you soon!";
            messageElement.classList.add('success');
            messageElement.classList.remove('error');
            
            // Reset form fields
            form.reset();
        }

        messageElement.classList.add('show'); // Make the message visible
    });

    // Function to animate elements on scroll
    function animateElements(elements) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px'
        });

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease-out';
            observer.observe(element);
        });
    }

    // Highlighting active navigation link
    const currentPage = window.location.pathname; // Get current page URL
    const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Add active class
        } else {
            link.classList.remove('active'); // Remove active class from others
        }
    });
});

// Add the styles for smooth transitions
const style = document.createElement('style');
style.textContent = `
    #contact-form {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    #contact-form.fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .form-message {
        font-size: 1rem;
        margin-top: 1rem;
        transition: opacity 0.6s ease-out;
        opacity: 0;
    }

    .form-message.show {
        opacity: 1;
    }
`;
document.head.appendChild(style);