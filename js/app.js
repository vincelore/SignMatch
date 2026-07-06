import { loginWithGoogle } from './auth.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
    initI18n();

    // Attach Google Login Listener
    const googleBtn = document.getElementById('btn-google-login');
    if (googleBtn) {
        googleBtn.addEventListener('click', loginWithGoogle);
    }
});