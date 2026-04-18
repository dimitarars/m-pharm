import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
    titleKey: string;
    descriptionKey: string;
    image?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ titleKey, descriptionKey, image }) => {
    const { t, i18n } = useTranslation();
    const title = t(titleKey);
    const description = t(descriptionKey);
    const og = image ?? '/img/Mpharm_images/MedicoPharmLogo.png';

    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={og} />
        </Helmet>
    );
};

export default SEOHead;
