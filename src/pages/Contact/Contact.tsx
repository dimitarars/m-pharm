import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SEOHead from '../../components/SEOHead.tsx';
import './Contact.css';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        AOS.refresh();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, subject, message } = form;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        window.location.href = `mailto:mpharm@mail.bg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <SEOHead titleKey="seo_contact_title" descriptionKey="seo_contact_desc" />
            <div className="contact-hero" data-aos="fade-down">
                <div className="container py-5">
                    <h1 className="contact-title">{t('contact')}</h1>
                    <p className="contact-subtitle">{t('contact_subtitle')}</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4 justify-content-center">

                    {/* Contact info */}
                    <div className="col-lg-5 col-md-10" data-aos="fade-right">
                        <div className="contact-card shadow-sm h-100">
                            <div className="contact-item">
                                <i className="bi bi-geo-alt-fill contact-icon"></i>
                                <div>
                                    <div className="contact-label">{t('address')}</div>
                                    <div className="contact-value">
                                        {t('address_line1')}<br />
                                        {t('address_line2')}
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-telephone-fill contact-icon"></i>
                                <div>
                                    <div className="contact-label">{t('phone')}</div>
                                    <a href="tel:+35929431800" className="contact-value contact-link">
                                        +359 2 9431800
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-printer-fill contact-icon"></i>
                                <div>
                                    <div className="contact-label">{t('fax')}</div>
                                    <div className="contact-value">+359 2 9431636</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-phone-fill contact-icon"></i>
                                <div>
                                    <div className="contact-label">{t('mobile')}</div>
                                    <a href="tel:+359878923575" className="contact-value contact-link d-block">
                                        +359 878 923575
                                    </a>
                                    <a href="tel:+359878240196" className="contact-value contact-link d-block">
                                        +359 878 240196
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-globe contact-icon"></i>
                                <div>
                                    <div className="contact-label">{t('website')}</div>
                                    <a
                                        href="http://www.medicopharmk.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-value contact-link"
                                    >
                                        www.medicopharmk.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="bi bi-envelope-fill contact-icon"></i>
                                <div>
                                    <div className="contact-label">{t('email')}</div>
                                    <a href="mailto:mpharm@mail.bg" className="contact-value contact-link">
                                        mpharm@mail.bg
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="col-lg-6 col-md-10" data-aos="fade-left">
                        <div className="contact-card shadow-sm h-100">
                            <h2 className="form-section-title">{t('contact_form_title')}</h2>

                            {submitted && (
                                <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                                    <i className="bi bi-check-circle-fill"></i>
                                    {t('form_success')}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label className="form-label contact-label">{t('form_name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control contact-input"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label contact-label">{t('form_email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control contact-input"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label contact-label">{t('form_subject')}</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control contact-input"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label contact-label">{t('form_message')}</label>
                                    <textarea
                                        name="message"
                                        className="form-control contact-input"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn contact-submit-btn w-100">
                                    <i className="bi bi-send me-2"></i>{t('form_send')}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
