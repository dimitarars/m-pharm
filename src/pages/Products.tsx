// src/pages/Products.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import QuickViewModal from "../components/product/QuickViewModal.tsx";
import { Categories, Category, SubCategories, SubCategory, Product, products, localize } from "../data/ProductsData.ts";
import SEOHead from "../components/SEOHead.tsx";
import "../index.css";

const Products: React.FC = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

    const selectCategory = (cat: Category | null) => {
        setSelectedCategory(cat);
        setSelectedSubCategory(null);
    };

    const selectSubCategory = (sub: SubCategory) => {
        const parent = Categories.find(c => c.id === sub.parentCategoryId) ?? null;
        setSelectedCategory(parent);
        setSelectedSubCategory(sub);
    };

    const filteredProducts = (() => {
        if (selectedSubCategory) {
            return products.filter(p => p.subCategory?.id === selectedSubCategory.id);
        }
        if (selectedCategory) {
            return products.filter(p => p.category?.id === selectedCategory.id);
        }
        return products;
    })();

    return (
        <main className="container my-5">
            <SEOHead titleKey="seo_products_title" descriptionKey="seo_products_desc" />
            <h1 className="mb-4">{t('our_products_title')}</h1>
            <div className="row">
                {/* Category Menu */}
                <aside className="col-12 col-md-3 mb-4 mb-md-0">
                    <div className="list-group">
                        <button
                            className={`list-group-item list-group-item-action ${selectedCategory === null ? 'active' : ''}`}
                            onClick={() => selectCategory(null)}
                        >
                            {t('all_categories')}
                        </button>

                        {Categories.map(cat => {
                            const subCats = SubCategories.filter(s => s.parentCategoryId === cat.id);
                            const isActive = selectedCategory?.id === cat.id;

                            return (
                                <React.Fragment key={cat.id}>
                                    <button
                                        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${isActive ? 'active' : ''}`}
                                        onClick={() => selectCategory(cat)}
                                    >
                                        {localize(cat.name, lang)}
                                        {subCats.length > 0 && (
                                            <i className={`bi ${isActive ? 'bi-chevron-up' : 'bi-chevron-down'} ms-2`}
                                               style={{ fontSize: '0.75rem' }} />
                                        )}
                                    </button>

                                    {subCats.length > 0 && isActive && subCats.map(sub => (
                                        <button
                                            key={sub.id}
                                            className={`list-group-item list-group-item-action ps-4 ${selectedSubCategory?.id === sub.id ? 'active' : ''}`}
                                            style={{ fontSize: '0.9rem', borderLeft: '3px solid #184288' }}
                                            onClick={() => selectSubCategory(sub)}
                                        >
                                            <i className="bi bi-dash me-1" />
                                            {localize(sub.name, lang)}
                                        </button>
                                    ))}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </aside>

                {/* Products Grid */}
                <section className="col-12 col-md-9">
                    <div className="row g-4">
                        {filteredProducts.map((product: Product) => (
                            <div
                                className="col-12 col-sm-6 col-lg-4 d-flex"
                                key={product.id}
                            >
                                <div className="card h-100 product-card fade-in">
                                    <div className="position-relative">
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.title}
                                            loading="lazy"
                                            style={{width: '100%', height: '300px', objectFit: 'contain'}}
                                        />
                                        <div
                                            className="quick-view-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                                        >
                                            <button
                                                className="btn btn-light"
                                                onClick={() => setSelectedProduct(product)}
                                            >
                                                {t('quick_view')}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text flex-grow-1">
                                            {product.quickViewDescription
                                                ? localize(product.quickViewDescription, lang)
                                                : ''}
                                        </p>
                                        <Link to={`/products/${product.id}`} className="btn btn-primary mt-auto">
                                            {t('view_details')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {selectedProduct && (
                <QuickViewModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </main>
    );
};

export default Products;
