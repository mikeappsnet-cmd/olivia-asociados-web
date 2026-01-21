import React from 'react';
import { Car, Shield, Clock, TreePalm as Tree, ChevronRight } from 'lucide-react';
import './CarInsurancePage.css';

const CarInsurancePage: React.FC = () => {
    return (
        <div className="car-page">
            {/* Hero Section */}
            <section className="car-hero">
                <div className="container">
                    <div className="car-hero-content">
                        <h1 className="car-title">
                            Seguro de auto que cuesta menos para buenos conductores
                        </h1>
                        <p className="car-subtitle">
                            Todo súper rápido. Reclamos sin fricción. Tarifas bajas si manejas poco.
                        </p>
                        <div className="car-hero-cta">
                            <button className="btn-car-quote">
                                Ver precio de Auto
                            </button>
                            <br />
                            <a href="#como-funciona" className="car-link">Cómo funciona nuestro seguro de auto</a>
                        </div>
                    </div>
                    {/* Custom Brand Illustration */}
                    <div className="car-hero-image">
                        <img src="/src/assets/illustrations/car-hero.png" alt="Auto Olivia & Asociados" style={{ width: '600px', opacity: 0.9 }} />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="car-features">
                <div className="container">
                    <h2 className="section-title-car">Una nueva clase de seguro de auto</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <Shield className="feature-icon" size={48} />
                            <h3>Asistencia en ruta gratuita</h3>
                            <p>Grúa, paso de corriente, cambio de llantas y cerrajería - ¡por nuestra cuenta!</p>
                        </div>
                        <div className="feature-item">
                            <Clock className="feature-icon" size={48} />
                            <h3>Resolución de reclamos súper rápida</h3>
                            <p>Usamos tecnología para manejar tu reclamo rápidamente y pagarte en minutos.</p>
                        </div>
                        <div className="feature-item">
                            <Car className="feature-icon" size={48} />
                            <h3>Precios justos</h3>
                            <p>Basados en cómo manejas realmente, no solo en quién eres.</p>
                        </div>
                        <div className="feature-item">
                            <Tree className="feature-icon" size={48} />
                            <h3>Plantamos árboles</h3>
                            <p>Ayudamos a limpiar la huella de carbono de tu auto plantando árboles.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Section */}
            <section className="car-coverage">
                <div className="container">
                    <h2 className="section-title-car">Lo que está cubierto</h2>
                    <p className="section-subtitle-car">Ya sea un raspón o pérdida total, ¡nuestro equipo está listo para ayudar!</p>

                    <div className="coverage-list">
                        <div className="coverage-item">
                            <div className="coverage-icon-wrapper">🤕</div>
                            <h4>Lesiones a terceros</h4>
                        </div>
                        <div className="coverage-item">
                            <div className="coverage-icon-wrapper">🚗</div>
                            <h4>Daños a terceros</h4>
                        </div>
                        <div className="coverage-item">
                            <div className="coverage-icon-wrapper">🔨</div>
                            <h4>Robo total o parcial</h4>
                        </div>
                        <div className="coverage-item">
                            <div className="coverage-icon-wrapper">💥</div>
                            <h4>Choques y accidentes</h4>
                        </div>
                        <div className="coverage-item">
                            <div className="coverage-icon-wrapper">🏥</div>
                            <h4>Gastos médicos ocupantes</h4>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <button className="btn-car-quote">
                            Ver precios ahora <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarInsurancePage;
