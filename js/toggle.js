// Carica la configurazione dal file JSON
fetch('config.json')
    .then(res => res.json())
    .then(config => {
        const isActive = config.isSiteActive;

        const maintenance = document.getElementById('maintenance');
        const main = document.getElementById('main');

        // Mostra la sezione corretta
        if (isActive) {
            maintenance.style.display = 'none';
            main.style.display = 'block';

            // Carica i componenti modulari
            loadComponent('components/header.html', 'hero-header', initMobileMenuLinks, () => loadLanguage(currentLang));
            loadComponent('components/hero.html', 'hero', () => loadLanguage(currentLang));
            loadComponent('components/services.html', 'services');
            loadComponent('components/feedback.html', 'feedback', initCarousel);
            loadComponent('components/contact.html', 'contact');
            loadComponent('components/footer.html', 'footer');
        } else {
            maintenance.style.display = 'flex';
            main.style.display = 'none';
        }
    });

// Funzione per caricare componenti HTML
// Funzione per caricare componenti HTML con callback
function loadComponent(url, targetId, callback) {
    fetch(url)
        .then(res => res.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;

            // Esegui callback se fornita
            if (callback) callback();
        });
}

