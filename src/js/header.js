document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const currentPath = window.location.pathname;

  navItems.forEach(item => {
    const navLink = item.querySelector('.nav-link');
    item.classList.remove('active');
    if (navLink.getAttribute('href').substring(1) === currentPath) {
      item.classList.add('active');
    }
  });
});
