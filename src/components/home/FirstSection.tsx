import {Link} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

const FirstSection: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className="px-4 py-5 text-center first-section w-5"
             style={{
                 minHeight: "100vh",
                 position: "relative",
                 justifyContent: "center",
                 alignItems: "center",
                 display: "flex",
                 flexDirection: "column",
                 marginBottom: "2rem"
             }}
        >
            <h1 className="display-5 fw-bold">{t("first_section_title")}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    {t("first_section_content")}
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/products" className="btn text-white btn-lg px-4 me-sm-3"
                          style={{backgroundColor: "#184288"}}>
                        {t("our_products_title")}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default FirstSection;