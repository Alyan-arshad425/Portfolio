document.addEventListener('DOMContentLoaded', function() {
    // Navbar active state handling
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    // Function to update active nav link
    function updateActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Initial call and scroll event listener
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

   
    // Add active class to home link on page load
    const homeLink = document.querySelector('.navbar a[href="#home"]');
    homeLink.classList.add('active');
});


function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };

    emailjs
        .send("service_2cdl796", "template_sspxx9r", templateParams)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        });
}


// Handle contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    sendEmail();
});

// Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '2rem';
scrollBtn.style.right = '2rem';
scrollBtn.style.padding = '1rem';
scrollBtn.style.fontSize = '2rem';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.background = '#081b29';
scrollBtn.style.color = 'white';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = 'blue';
scrollBtn.style.border = '2px solid white';


window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

