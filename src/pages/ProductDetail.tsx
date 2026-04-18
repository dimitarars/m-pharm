import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { products, localize } from "../data/ProductsData.ts";

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <main className="container my-5">
                <h2>Product Not Found</h2>
                <Link to="/products" className="btn btn-secondary">
                    {t('back_to_products')}
                </Link>
            </main>
        );
    }

    const description = product.quickViewDescription
        ? localize(product.quickViewDescription, lang)
        : '';

    return (
        <main className="container my-5">
            <Helmet>
                <html lang={i18n.language} />
                <title>{`${product.title} | Medicopharm`}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={`${product.title} | Medicopharm`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={product.image} />
            </Helmet>
            <div className="row g-5 align-items-center">
                {/* Left: Product Image */}
                <div className="col-md-5 d-flex justify-content-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{maxWidth: '100%', height: 'auto', maxHeight: '500px'}}
                    />
                </div>
                {/* Right: Product Information */}
                <div className="col-md-7">
                    <h1>{product.title}</h1>
                    <dl className="lead" style={{
                        textAlign: 'justify',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '20px',
                        fontWeight: 'normal'
                    }}>
                        {product.description?.map((item, index) => (
                            <React.Fragment key={index}>
                                <dt><strong>{localize(item.label, lang)}</strong></dt>
                                <dd>{localize(item.text, lang)}</dd>
                            </React.Fragment>
                        ))}
                    </dl>
                    <Link to="/products" className="btn btn-secondary">
                        {t('back_to_products')}
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;
