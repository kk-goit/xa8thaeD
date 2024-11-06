const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpenButton = document.querySelector('.mobile-menu-open-btn'); // Assuming you have a button to open the menu
const mobileMenuCloseButton = document.querySelector('.mobile-menu-close-btn');

// Open the mobile menu
mobileMenuOpenButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

// Close the mobile menu
mobileMenuCloseButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
