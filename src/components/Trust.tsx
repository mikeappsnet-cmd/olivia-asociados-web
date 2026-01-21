import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Trust.css';

const Trust: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 85%'
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from(statsRef.current?.children || [], {
            scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 85%'
            },
            scale: 0.8,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.7)'
        });
    }, []);

    return (
        <section className="trust" id="nosotros">
            <div className="container trust-container">
                <div className="trust-content" ref={textRef}>
                    <h2 className="section-title">Confianza que trasciende</h2>
                    <p className="section-subtitle" style={{ textAlign: 'left', margin: '1.5rem 0' }}>
                        En Olivia & Asociados, no solo vendemos seguros; construimos relaciones
                        basadas en la transparencia y el profesionalismo. Nuestra tecnología
                        nos permite estar cerca de ti cuando más nos necesitas.
                    </p>
                    <ul className="trust-list">
                        <li>✓ Asesoría personalizada 24/7</li>
                        <li>✓ Procesos 100% digitales</li>
                        <li>✓ Respaldo de las mejores aseguradoras</li>
                    </ul>
                </div>

                <div className="trust-stats" ref={statsRef}>
                    <div className="stat-card">
                        <h3>+10k</h3>
                        <p>Clientes Protegidos</p>
                    </div>
                    <div className="stat-card">
                        <h3>15 Min</h3>
                        <p>Tiempo de Respuesta</p>
                    </div>
                    <div className="stat-card">
                        <h3>99%</h3>
                        <p>Satisfacción</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
