// src/components/product/QuickViewModal.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Product, localize } from '../../data/ProductsData';

interface QuickViewModalProps {
    product: Product;
    onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({product, onClose}) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return ReactDOM.createPortal(
        <>
            {/* Backdrop */}
            <div className="modal-backdrop fade show"/>

            {/* modal */}
            <div
                className="modal fade show d-block"
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                style={{backgroundColor: 'transparent'}}
            >
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onClose}
                            style={{position: 'sticky', top: '2rem', right: '2rem', zIndex: 2, alignSelf: 'flex-end', backgroundColor: 'gray', margin:'1rem'}}
                        />
                        {/* Use a row with no gutters */}
                        <div className="row g-0">

                            {/* Left: image / carousel */}
                            <div className="col-md-6">
                                <div id="quickViewCarousel" className="carousel slide h-100" data-bs-ride="carousel">
                                    <div className="carousel-inner h-100">
                                        <div key={product.id} className="carousel-item active h-100">
                                            <img
                                                src={product.image}
                                                className="d-block w-100"
                                                style={{objectFit: 'contain', height: '580px'}}
                                                alt={product.title}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#quickViewCarousel"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#quickViewCarousel"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            {/* Right: info */}
                            <div className="col-md-6 d-flex flex-column pe-4">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title">{product.title}</h5>
                                </div>
                                <div className="modal-body">
                                    <dl className="text-muted" style={{textAlign: 'justify'}}>
                                        {product.description?.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <dt><strong>{localize(item.label, lang)}</strong></dt>
                                                <dd>{localize(item.text, lang)}</dd>
                                            </React.Fragment>
                                        ))}
                                    </dl>
                                    <hr/>
                                    {product.category && (
                                        <p className="small text-muted">
                                            {t('category')}: <Link
                                            to={`/products?cat=${product.category.id}`}>{localize(product.category.name, lang)}</Link>
                                        </p>
                                    )}
                                </div>
                                <div className="modal-footer border-0 mt-auto">
                                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                                        {t('view_details')}
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default QuickViewModal;
