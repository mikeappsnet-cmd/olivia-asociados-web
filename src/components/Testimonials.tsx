import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: 'María González',
        role: 'Empresaria',
        text: 'En 5 minutos tenía mi seguro vehicular. Sin papeleos ni llamadas eternas. Olivia & Asociados cambió mi forma de ver los seguros.',
        rating: 5,
        avatar: 'MG'
    },
    {
        name: 'Carlos Ramírez',
        role: 'Ingeniero',
        text: 'Tuve un accidente y el equipo de Olivia me guió en cada paso. La asesoría gratuita realmente funciona. 100% recomendado.',
        rating: 5,
        avatar: 'CR'
    },
    {
        name: 'Ana Torres',
        role: 'Diseñadora',
        text: 'Comparé con otras corredoras y Olivia & Asociados me ofreció el mejor precio sin sacrificar cobertura. Excelente servicio.',
        rating: 5,
        avatar: 'AT'
    }
];

const Testimonials: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%'
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }
    }, []);

    return (
        <section className="testimonials" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="badge">Testimonios</span>
                    <h2 className="section-title">Lo que dicen nuestros clientes</h2>
                    <p className="section-subtitle">
                        Más de 10,000 peruanos ya confían en nosotros para proteger lo que más valoran.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card glass"
                            ref={el => { cardsRef.current[index] = el; }}
                        >
                            <div className="stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#FCD34D" color="#FCD34D" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="avatar">{testimonial.avatar}</div>
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="trust-badges">
                    <div className="trust-badge">
                        <h3>+10,000</h3>
                        <p>Clientes Satisfechos</p>
                    </div>
                    <div className="trust-badge">
                        <h3>4.9/5</h3>
                        <p>Calificación Promedio</p>
                    </div>
                    <div className="trust-badge">
                        <h3>24/7</h3>
                        <p>Atención Disponible</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
