const body = document.body;
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const darkModeToggle = document.getElementById('darkModeToggle');

// Load saved dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark');
  darkModeToggle.textContent = '🌞';
} else {
  darkModeToggle.textContent = '🌙';
}

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dark mode and store preference
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = '🌞';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.textContent = '🌙';
  }
});


// Contact Form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return; // safeguard

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.style.display = name.value.trim() === '' ? 'block' : 'none';
    emailError.style.display = !/^\S+@\S+\.\S+$/.test(email.value) ? 'block' : 'none';
    messageError.style.display = message.value.trim() === '' ? 'block' : 'none';

    if (name.value.trim() === '') isValid = false;
    if (!/^\S+@\S+\.\S+$/.test(email.value)) isValid = false;
    if (message.value.trim() === '') isValid = false;

    if (isValid) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });
});
