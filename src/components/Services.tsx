import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Car, Heart, Home } from 'lucide-react';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Seguro Vehicular',
        description: 'Protección total para tu vehículo con asistencia las 24 horas.',
        icon: <Car size={32} />,
        color: '#0D1B3E'
    },
    {
        title: 'Seguro de Salud',
        description: 'Acceso a las mejores clínicas y especialistas del país.',
        icon: <Heart size={32} />,
        color: '#1565C0'
    },
    {
        title: 'Seguro de Hogar',
        description: 'Cuida tu patrimonio y lo que más quieres en casa.',
        icon: <Home size={32} />,
        color: '#00B0FF'
    },
    {
        title: 'Seguro de Vida',
        description: 'Tranquilidad financiera para los que más amas.',
        icon: <Shield size={32} />,
        color: '#0D1B3E'
    }
];

const Services: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }
    }, []);

    return (
        <section className="services" id="seguros" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestras Coberturas</h2>
                    <p className="section-subtitle">
                        Diseñamos planes a medida para que solo pagues por lo que realmente necesitas.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            ref={el => { cardsRef.current[index] = el; }}
                        >
                            <div className="service-icon" style={{ color: service.color }}>
                                {service.icon}
                            </div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-desc">{service.description}</p>
                            <a href="#contacto" className="service-link">Saber más →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
