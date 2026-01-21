import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LemonadeHero.css';

const LemonadeHero: React.FC = () => {
    const lineRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (lineRef.current) {
            const length = lineRef.current.getTotalLength();
            gsap.set(lineRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length
            });
            gsap.to(lineRef.current, {
                strokeDashoffset: 0,
                duration: 2.5,
                ease: 'power2.inOut',
                delay: 0.5
            });
        }
    }, []);

    return (
        <section className="lemonade-hero">
            <div className="container hero-container-lemonade">
                <div className="hero-content-lemonade">
                    <h1 className="hero-title-lemonade">
                        Olvida todo lo que sabes <br />
                        sobre seguros
                    </h1>
                    <p className="hero-subtitle-lemonade">
                        Todo instantáneo. Precios increíbles. Gran corazón.
                    </p>
                    <a href="#productos" className="btn-hero-lemonade">
                        Ver Precios
                    </a>
                </div>

                {/* Decorative SVG Line */}
                <div className="hero-decoration">
                    <svg viewBox="0 0 600 200" className="decoration-svg">
                        <path
                            ref={lineRef}
                            d="M50,100 Q200,30 400,100 T550,100"
                            fill="none"
                            stroke="#00B0FF"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default LemonadeHero;
