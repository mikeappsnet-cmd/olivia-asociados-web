import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import './SocialProof.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: 'Carlos Mendoza',
        username: '@carlosmendoza',
        text: '@OliviaAsociados fue el seguro más simple y fácil que he comprado. ¡Las aseguradoras tradicionales necesitan actualizarse! 👏',
        avatar: 'CM'
    },
    {
        name: 'María García',
        username: '@mariag',
        text: '¿Por qué no todos usan @OliviaAsociados? Acabo de cambiarme y reduje mis costos en S/ 350 #Ganando',
        avatar: 'MG'
    },
    {
        name: 'Roberto Silva',
        username: '@robertosilva',
        text: 'Wow. Presenté un reclamo con @OliviaAsociados y me pagaron en literalmente 3 minutos. Si tienes auto o casa, NECESITAS este seguro.',
        avatar: 'RS'
    },
    {
        name: 'Ana Torres',
        username: '@anatorres',
        text: 'Siempre decepcionada de cómo las aseguradoras pelean contra el cliente. Primera buena experiencia con @OliviaAsociados.',
        avatar: 'AT'
    },
    {
        name: 'Luis Ramírez',
        username: '@luisramirez',
        text: '@OliviaAsociados Acabo de comprar seguro de hogar y estoy seguro que fue más fácil que pedir pizza. Excelente experiencia.',
        avatar: 'LR'
    },
    {
        name: 'Patricia Vega',
        username: '@patriciavega',
        text: 'Una vez cada 2-3 años encuentro una app/negocio verdaderamente excepcional. @OliviaAsociados lo tiene todo: UX, precios, servicio.',
        avatar: 'PV'
    }
];

const SocialProof: React.FC = () => {
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
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    }, []);

    return (
        <section className="social-proof-lemonade" ref={sectionRef}>
            <div className="container">
                <div className="social-header">
                    <h2 className="social-title">La Aseguradora (Casi) 5 Estrellas</h2>
                    <div className="rating-display">
                        <div className="stars-large">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={32} fill="#FCD34D" color="#FCD34D" />
                            ))}
                        </div>
                        <p className="rating-text">4.9 estrellas en la App Store</p>
                    </div>
                </div>

                <div className="testimonials-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card-lemonade"
                            ref={el => { cardsRef.current[index] = el; }}
                        >
                            <div className="testimonial-header-lemonade">
                                <div className="avatar-lemonade">{testimonial.avatar}</div>
                                <div className="user-info-lemonade">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.username}</p>
                                </div>
                            </div>
                            <p className="testimonial-text-lemonade">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
