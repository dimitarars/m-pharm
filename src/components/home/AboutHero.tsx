// src/components/home/AboutHero.tsx
import React from 'react';
import {useTranslation} from "react-i18next";

const AboutHero: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="about-hero pt-0" style={{
            // backgroundColor: '#f8f9fa',
            width: '100%'}}>
            {/* Nested container centers your content */}
            <div className="container"
                 style={{marginBottom: 40, backgroundColor: "transparent", paddingTop: 0, marginTop: 0}}>
                <div className="row align-items-center">
                    {/* Text Column */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="mb-3 mt-0">{t("about_us")}</h1>
                        <p className="lead">
                            {/*In 1995, Medicopharm established a production laboratory specializing in high-tech products*/}
                            {/*and formulas.*/}
                            {/*The laboratory is dedicated to extensive research and development of innovative and original*/}
                            {/*formulations.*/}
                            {/*All products are created using proprietary company technologies, with patents protecting*/}
                            {/*their compositions,*/}
                            {/*production methods, branding, logos, and packaging designs.*/}
                            {t("about_hero_content_lead")}
                        </p>
                        <p>
                            {/*The laboratory's technological expertise encompasses a wide range of formulations, including*/}
                            {/*liquid solutions,*/}
                            {/*molecular formulations, emulsions, suspensions, nanogel, sprays, granules, powders, gels,*/}
                            {/*pastes, and creams.*/}
                            {/*Its team comprises highly skilled specialists, such as industrial pharmacists, bioengineers,*/}
                            {/*biotechnologists,*/}
                            {/*and electronic and mechanical engineers. Some team members hold scientific degrees and*/}
                            {/*possess international*/}
                            {/*experience and exceptional professional qualifications.*/}
                            {t("about_hero_content")}
                        </p>
                    </div>

                    {/* Carousel Column */}
                    <div className="col-md-6" data-bs-ride="carousel"
                         data-bs-interval="3000">
                        <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {/* Slide 1 */}
                                <div className="carousel-item active">
                                    <img
                                        src="/img/Mpharm_images/factory_7.jpg"
                                        className="d-block w-100"
                                        alt="Slide 1"
                                    />
                                </div>
                                {/* Slide 2 */}
                                <div className="carousel-item">
                                    <img
                                        src="/img/Mpharm_images/factory_12.jpg"
                                        className="d-block w-100"
                                        alt="Slide 2"
                                    />
                                </div>
                                {/* Slide 3 */}
                                <div className="carousel-item">
                                    <img
                                        src="/img/Mpharm_images/factory_8.jpg"
                                        className="d-block w-100"
                                        alt="Slide 3"
                                    />
                                </div>
                            </div>
                            {/* Carousel Controls */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#aboutCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#aboutCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
