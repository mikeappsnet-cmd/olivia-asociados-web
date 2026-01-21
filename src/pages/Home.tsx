import React, { useEffect } from 'react';
import LemonadeHero from '../components/LemonadeHero';
import SocialProof from '../components/SocialProof';
import ProductGrid from '../components/ProductGrid';
import InstantEverything from '../components/InstantEverything';
import HowItWorks from '../components/HowItWorks';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main>
            <LemonadeHero />
            <SocialProof />
            <ProductGrid />
            <InstantEverything />
            <HowItWorks />

            {/* Final CTA */}
            <section id="contacto" style={{
                padding: '8rem 0',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #0D1B3E 0%, #1565C0 100%)',
                color: 'white'
            }}>
                <div className="container">
                    <h2 style={{
                        color: 'white',
                        fontSize: '3.5rem',
                        marginBottom: '1.5rem',
                        fontWeight: 800
                    }}>
                        ¿Listo para protección instantánea?
                    </h2>
                    <p style={{
                        opacity: 0.9,
                        fontSize: '1.3rem',
                        marginBottom: '3rem',
                        maxWidth: '700px',
                        margin: '0 auto 3rem'
                    }}>
                        Únete a los miles de peruanos que ya confían en Olivia & Asociados.
                    </p>
                    <a
                        href="https://wa.me/51999999999"
                        className="btn btn-primary btn-lg"
                        style={{
                            background: 'white',
                            color: '#0D1B3E',
                            padding: '1.5rem 4rem',
                            fontSize: '1.2rem',
                            fontWeight: 700
                        }}
                    >
                        Habla con un asesor por WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;
