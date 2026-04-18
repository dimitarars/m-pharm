import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SITE = 'https://www.medicopharmk.com';

interface SEOHeadProps {
    titleKey: string;
    descriptionKey: string;
    image?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ titleKey, descriptionKey, image }) => {
    const { t, i18n } = useTranslation();
    const title = t(titleKey);
    const description = t(descriptionKey);
    const og = image
        ? (image.startsWith('http') ? image : `${SITE}${image}`)
        : `${SITE}/img/Mpharm_images/MedicoPharmLogo.png`;
    const canonical = `${SITE}${window.location.pathname}`;

    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Medicopharm" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={og} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content={i18n.language} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={og} />
        </Helmet>
    );
};

export default SEOHead;
