function initMobileMenuLinks() {
    const mobileLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const dialog = document.getElementById('mobile-menu');
            if (dialog && dialog.open) {
                dialog.close();
            }
        });
    });
}
