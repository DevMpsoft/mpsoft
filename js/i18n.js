// i18n.js

// Lingua di default
let currentLang = 'it';

// Carica le stringhe della lingua e aggiorna il DOM
async function loadLanguage(lang) {
    try {
        console.log(lang);
        const res = await fetch(`lang/${lang}.json`);
        const translations = await res.json();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.innerText = translations[key];
            }
        });

        currentLang = lang;
    } catch (e) {
        console.error('Errore caricamento lingua:', e);
    }
}

// Funzione per cambiare lingua dall’interfaccia
function switchLanguage(lang) {
    console.log("Il lang è:", lang);
    loadLanguage(lang);
}

// Carica lingua di default al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLang);
});
