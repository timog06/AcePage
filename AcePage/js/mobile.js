document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        menuButton.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
            nav.classList.remove('nav-open');
            menuButton.classList.remove('active');
        }
    });
});
