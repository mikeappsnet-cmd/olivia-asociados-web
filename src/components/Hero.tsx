import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero: React.FC = () => {
    const lineRef = useRef<SVGPathElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Reveal text
        gsap.from(textRef.current?.children || [], {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Animate Signature Line
        if (lineRef.current) {
            const length = lineRef.current.getTotalLength();

            gsap.set(lineRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length
            });

            gsap.to(lineRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                ease: 'power2.inOut',
                delay: 0.5
            });
        }
    }, []);

    return (
        <section className="hero" id="inicio">
            <div className="container hero-container">
                <div className="hero-content" ref={textRef}>
                    <h1 className="hero-title">
                        Seguros que se adaptan a <br />
                        <span className="accent-text">tu vida real.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Minimalismo, confianza y rapidez. Olvida los trámites complejos,
                        el futuro de tu protección está en Olivia & Asociados.
                    </p>
                    <div className="hero-btns">
                        <a href="#contacto" className="btn btn-primary">Empezar ahora</a>
                        <a href="#seguros" className="btn btn-outline">Ver coberturas</a>
                    </div>

                    <div className="signature-line-container">
                        <svg viewBox="0 0 500 100" className="signature-line-svg">
                            <path
                                ref={lineRef}
                                d="M10,80 Q100,20 250,80 T490,20"
                                fill="none"
                                stroke="#00B0FF"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
