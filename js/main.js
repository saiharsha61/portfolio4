// Active nav highlight based on scroll
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 90;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Reveal elements on scroll
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scrolling (for older browsers)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const el = document.querySelector(this.getAttribute('href'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form fake submit
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for your message! (To enable real emails, connect a service like Formspree.)');
      form.reset();
    });
  }
});
