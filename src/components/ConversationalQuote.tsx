import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Car, Heart, Home, ChevronRight, Check } from 'lucide-react';
import gsap from 'gsap';
import './ConversationalQuote.css';

interface FormData {
    email: string;
    productType: string;
    idType: 'dni' | 'ruc';
    idNumber: string;
    fullName: string;
}

interface Product {
    id: string;
    name: string;
    icon: React.ReactElement;
}

const products: Product[] = [
    { id: 'auto', name: 'Seguro de Auto', icon: <Car size={40} /> },
    { id: 'vida', name: 'Seguro de Vida', icon: <Heart size={40} /> },
    { id: 'hogar', name: 'Seguro de Hogar', icon: <Home size={40} /> }
];

const ConversationalQuote: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        productType: '',
        idType: 'dni',
        idNumber: '',
        fullName: ''
    });

    const lineRef = useRef<SVGPathElement>(null);

    // Email validation
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    // DNI validation (8 digits)
    const isDniValid = formData.idType === 'dni' && /^\d{8}$/.test(formData.idNumber);

    // RUC validation (11 digits, starts with 10, 20, 15, or 17)
    const isRucValid = formData.idType === 'ruc' && /^(10|20|15|17)\d{9}$/.test(formData.idNumber);

    const isIdValid = formData.idType === 'dni' ? isDniValid : isRucValid;

    // Step 3 validation
    const isStep3Valid = isIdValid && formData.fullName.trim().length >= 3;

    useEffect(() => {
        // Animate signature line
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
                delay: 0.3
            });
        }
    }, [step]);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('¡Cotización enviada! Martha te contactará pronto.');
    };

    const getMarthaMessage = () => {
        switch (step) {
            case 1:
                return '¡Hola! Soy Martha 👋 Empecemos con tu email';
            case 2:
                return '¿Qué te gustaría proteger hoy?';
            case 3:
                return 'Ya casi terminamos. Solo necesito algunos datos';
            default:
                return '';
        }
    };

    const slideVariants = {
        enter: { x: 300, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -300, opacity: 0 }
    };

    return (
        <section className="conversational-quote">
            <div className="container">
                {/* Martha Avatar & Message */}
                <div className="martha-header">
                    <div className="martha-avatar">M</div>
                    <p className="martha-message">{getMarthaMessage()}</p>
                </div>

                {/* Signature Line */}
                <div className="signature-line-wrapper">
                    <svg viewBox="0 0 400 80" className="signature-svg">
                        <path
                            ref={lineRef}
                            d="M10,40 Q100,10 200,40 T390,40"
                            fill="none"
                            stroke="#FF0083"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Steps Container */}
                <div className="steps-container">
                    <AnimatePresence mode="wait">
                        {/* Step 1: Email */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                                className="step-content"
                            >
                                <div className="input-group-large">
                                    <Mail className="input-icon" size={24} />
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="input-large"
                                    />
                                </div>
                                {formData.email && !isEmailValid && (
                                    <p className="error-text">Por favor, ingresa un email válido</p>
                                )}
                                <button
                                    className="btn-lemonade"
                                    onClick={handleNext}
                                    disabled={!isEmailValid}
                                >
                                    Siguiente <ChevronRight size={20} />
                                </button>
                            </motion.div>
                        )}

                        {/* Step 2: Product Selection */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                                className="step-content"
                            >
                                <div className="product-cards">
                                    {products.map((product) => (
                                        <div
                                            key={product.id}
                                            className={`product-card-lemonade ${formData.productType === product.id ? 'selected' : ''
                                                }`}
                                            onClick={() => setFormData({ ...formData, productType: product.id })}
                                        >
                                            <div className="product-icon-lemonade">{product.icon}</div>
                                            <h3>{product.name}</h3>
                                            {formData.productType === product.id && (
                                                <Check className="check-icon" size={24} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="btn-lemonade"
                                    onClick={handleNext}
                                    disabled={!formData.productType}
                                >
                                    Siguiente <ChevronRight size={20} />
                                </button>
                            </motion.div>
                        )}

                        {/* Step 3: Personal Data */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                                className="step-content"
                            >
                                <div className="input-group">
                                    <label>Nombre Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Juan Pérez García"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="input-standard"
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Tipo de Documento</label>
                                    <div className="toggle-group">
                                        <button
                                            className={`toggle-btn ${formData.idType === 'dni' ? 'active' : ''}`}
                                            onClick={() => setFormData({ ...formData, idType: 'dni', idNumber: '' })}
                                        >
                                            DNI
                                        </button>
                                        <button
                                            className={`toggle-btn ${formData.idType === 'ruc' ? 'active' : ''}`}
                                            onClick={() => setFormData({ ...formData, idType: 'ruc', idNumber: '' })}
                                        >
                                            RUC
                                        </button>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>{formData.idType === 'dni' ? 'DNI' : 'RUC'}</label>
                                    <input
                                        type="text"
                                        placeholder={formData.idType === 'dni' ? '12345678' : '20123456789'}
                                        value={formData.idNumber}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '');
                                            const maxLength = formData.idType === 'dni' ? 8 : 11;
                                            if (value.length <= maxLength) {
                                                setFormData({ ...formData, idNumber: value });
                                            }
                                        }}
                                        className="input-standard"
                                        maxLength={formData.idType === 'dni' ? 8 : 11}
                                    />
                                    {formData.idNumber && !isIdValid && (
                                        <p className="error-text">
                                            {formData.idType === 'dni'
                                                ? 'El DNI debe tener 8 dígitos'
                                                : 'El RUC debe tener 11 dígitos y empezar con 10, 20, 15 o 17'}
                                        </p>
                                    )}
                                </div>

                                <button
                                    className="btn-lemonade btn-primary-lemonade"
                                    onClick={handleSubmit}
                                    disabled={!isStep3Valid}
                                >
                                    Obtener mi precio
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Progress Indicator */}
                <div className="progress-dots">
                    {[1, 2, 3].map((dot) => (
                        <div key={dot} className={`dot ${step >= dot ? 'active' : ''}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConversationalQuote;
