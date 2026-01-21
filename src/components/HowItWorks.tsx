import React from 'react';
import { Heart, TrendingUp, Award } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
    return (
        <section className="how-it-works">
            <div className="container">
                <h2 className="how-title">Cómo Funciona Olivia & Asociados</h2>
                <p className="how-description">
                    Olivia & Asociados invierte el modelo tradicional de seguros. Tratamos las primas que pagas
                    como si fuera tu dinero, no el nuestro. Con nosotros, todo se vuelve simple y transparente.
                    Tomamos una tarifa fija, pagamos reclamos súper rápido, y devolvemos lo que sobra a causas que te importan.
                </p>

                <div className="trust-grid">
                    <div className="trust-item">
                        <Heart size={56} className="trust-icon" />
                        <h3>Diseñado para Impacto Social</h3>
                        <p>Olivia & Asociados es una empresa con propósito social. El impacto es parte de nuestra misión legal y modelo de negocio, no solo marketing.</p>
                    </div>

                    <div className="trust-item">
                        <TrendingUp size={56} className="trust-icon" />
                        <h3>Crecimiento Sostenible</h3>
                        <p>Empresa peruana en crecimiento, comprometida con la transparencia y la innovación en el mercado de seguros.</p>
                    </div>

                    <div className="trust-item">
                        <Award size={56} className="trust-icon" />
                        <h3>Calificación A y Respaldados</h3>
                        <p>Olivia & Asociados está completamente regulada y respaldada por las aseguradoras más confiables del mercado peruano.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
