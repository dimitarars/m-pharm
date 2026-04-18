import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'mp-lang';

const COUNTRY_LANG: Record<string, string> = {
    BG: 'bg',
    DE: 'de', AT: 'de', LI: 'de', CH: 'de',
    FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr',
};

export function useGeoLanguage() {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY)) return;

        const ctrl = new AbortController();

        fetch('https://ipapi.co/json/', { signal: ctrl.signal })
            .then(r => r.json())
            .then((data: { country_code?: string }) => {
                const lang = COUNTRY_LANG[data.country_code ?? ''] ?? 'en';
                i18n.changeLanguage(lang);
                localStorage.setItem(STORAGE_KEY, lang);
            })
            .catch(() => {
                localStorage.setItem(STORAGE_KEY, 'en');
            });

        return () => ctrl.abort();
    }, []);
}
