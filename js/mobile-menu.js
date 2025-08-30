function initMobileMenuLinks() {
    const mobileMenu = document.getElementById('mobile-menu');

    // Seleziona tutti i link interni
    const mobileLinks = document.querySelectorAll('#mobile-menu a[href^="#"]');

    // Seleziona i bottoni per la lingua
    const languageButtons = document.querySelectorAll('#mobile-menu button[onclick^="switchLanguage"]');

    // Funzione comune per chiudere il menu
    const closeMenu = () => {
        if (mobileMenu && mobileMenu.open) {
            mobileMenu.close();
        }
    };

    // Aggiungi event listener a tutti i link interni
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Aggiungi event listener a tutti i bottoni lingua
    languageButtons.forEach(btn => {
        btn.addEventListener('click', closeMenu);
    });
}

// Inizializza il tutto dopo il caricamento del DOM
document.addEventListener('DOMContentLoaded', initMobileMenuLinks);

