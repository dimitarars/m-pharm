import React from "react";
import { useTranslation } from "react-i18next";

const FeaturesSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="features"
             style={{
                 minHeight: "100vh",
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
                 justifyContent: "center",
                 padding: "2rem",
                 marginTop: 40, marginBottom: 40
             }}
        >
            <div className="container">
                <h2 className="text-center mb-4">{t('specialties_title')}</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Feature Column 1 */}
                    <div className="col text-center">
                        <div className="mb-3">
                            <i className="bi bi-award" style={{fontSize: '2rem', color: "#184288"}}></i>
                        </div>
                        <h3>{t('specialties_cert_title')}</h3>
                        <p className="mb-3">{t('specialties_cert_text')}</p>
                    </div>

                    {/* Feature Column 2 */}
                    <div className="col text-center">
                        <div className="mb-3">
                            <i className="bi bi-globe" style={{fontSize: '2rem', color: "#184288"}}></i>
                        </div>
                        <h3>{t('specialties_global_title')}</h3>
                        <p className="mb-3">{t('specialties_global_text')}</p>
                    </div>

                    {/* Feature Column 3 */}
                    <div className="col text-center">
                        <div className="mb-3">
                            <i className="bi bi-lightbulb" style={{fontSize: '2rem', color: '#184288'}}></i>
                        </div>
                        <h3>{t('specialties_further_title')}</h3>
                        <p className="mb-3">{t('specialties_further_text')}</p>
                        <a href="#" className="btn text-white" style={{backgroundColor: "#184288"}}>
                            {t('specialties_cta')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
