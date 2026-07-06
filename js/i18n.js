const SUPPORTED_LANGS = ['en', 'nl', 'es', 'fr', 'de'];
let currentLang = localStorage.getItem('signmatch_lang');

export async function initI18n() {
    if (!currentLang) {
        // Auto-detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (SUPPORTED_LANGS.includes(browserLang)) {
            currentLang = browserLang;
        } else {
            currentLang = 'en'; // Default fallback
        }
    }
    await loadLanguage(currentLang);
}

export async function loadLanguage(lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        const translations = await response.json();
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                if (el.tagName === 'INPUT' && el.getAttribute('type') === 'placeholder') {
                    el.placeholder = translations[key];
                } else {
                    el.innerText = translations[key];
                }
            }
        });
        
        document.documentElement.lang = lang;
        localStorage.setItem('signmatch_lang', lang);
        currentLang = lang;
    } catch (error) {
        console.error("Error loading language:", error);
    }
}

// Bind language selection buttons
document.getElementById('lang-options')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('lang-btn')) {
        loadLanguage(e.target.dataset.lang);
        document.getElementById('language-screen').classList.replace('active', 'hidden');
        document.getElementById('auth-screen').classList.replace('hidden', 'active');
    }
});