import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitchItem from "./LanguageSwitchItem.tsx";

const LANGUAGES = [
    { code: 'en', nameKey: 'english', flag: '/icons/uk_flag.svg' },
    { code: 'bg', nameKey: 'bulgarian', flag: '/icons/bg_2.svg' },
    { code: 'de', nameKey: 'german', flag: '/icons/de_flag.svg' },
    { code: 'fr', nameKey: 'french', flag: '/icons/fr_flag.svg' },
];

const LanguageSwitch: React.FC = () => {
    const { t, i18n } = useTranslation();

    const current = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('mp-lang', lang);
    };

    return (
        <li className="nav-item dropdown">
            <button
                className="btn dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}
            >
                <img src={current.flag} alt={t(current.nameKey)} style={{ width: '20px', marginRight: '5px' }} />
                {t(current.nameKey)}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                {LANGUAGES.filter(l => l.code !== i18n.language).map(lang => (
                    <LanguageSwitchItem
                        key={lang.code}
                        className="dropdown-item"
                        content={t(lang.nameKey)}
                        flagIconSrc={lang.flag}
                        altText={t(lang.nameKey)}
                        onClickHandler={() => handleLanguageChange(lang.code)}
                    />
                ))}
            </ul>
        </li>
    );
};

export default LanguageSwitch;
