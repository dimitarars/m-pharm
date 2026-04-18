import React, {useEffect} from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";
import AboutHero from "../../components/home/AboutHero.tsx";
import FirstSection from "../../components/home/FirstSection.tsx";
import FeaturesSection from "../../components/home/FeaturesSection.tsx";
import SEOHead from "../../components/SEOHead.tsx";
import "./Home.css";
import AOS from "aos";

const Home: React.FC = () => {

        useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="home-page">
            <SEOHead titleKey="seo_home_title" descriptionKey="seo_home_desc" />
            <div className="home-content">
                <div data-aos="fade-down">
                    <FirstSection/>
                </div>
                <div data-aos="fade-right">
                    <AboutHero/>
                </div>
                <div
                    data-aos="fade-left"
                    // data-aos-duration="1200"    // milliseconds
                    // data-aos-offset="200"       // start animation 200px before the element is in view
                    // data-aos-delay="100"        // delay this single element by 100ms
                >
                    <FeaturesSection/>
                </div>
            </div>
        </div>
    );
};

export default Home;
