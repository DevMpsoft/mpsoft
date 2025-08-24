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
            loadComponent('components/hero-header.html', 'hero-header');
            loadComponent('components/hero.html', 'hero');
            loadComponent('components/footer.html', 'footer');

            //loadComponent('components/contact.html', 'contact');
        } else {
            maintenance.style.display = 'flex';
            main.style.display = 'none';
        }
    });

// Funzione per caricare componenti HTML
function loadComponent(url, targetId) {
    fetch(url)
        .then(res => res.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
        });
}
