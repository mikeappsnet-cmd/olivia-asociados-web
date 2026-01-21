import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Heart, Home, Shield, ChevronRight, Check, Loader2 } from 'lucide-react';
import './QuoteWizard.css';

interface Product {
    id: string;
    name: string;
    icon: React.ReactElement;
    color: string;
}

const products: Product[] = [
    { id: 'auto', name: 'Seguro Vehicular', icon: <Car size={32} />, color: '#1565C0' },
    { id: 'salud', name: 'Seguro de Salud', icon: <Heart size={32} />, color: '#00B0FF' },
    { id: 'hogar', name: 'Seguro de Hogar', icon: <Home size={32} />, color: '#0D1B3E' },
    { id: 'vida', name: 'Seguro de Vida', icon: <Shield size={32} />, color: '#1565C0' }
];

const QuoteWizard: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState<string>('');
    const [formData, setFormData] = useState({
        placa: '',
        marca: '',
        modelo: '',
        año: '',
        nombre: '',
        telefono: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const progress = (step / 4) * 100;

    const handleProductSelect = (productId: string) => {
        setSelectedProduct(productId);
        setTimeout(() => setStep(2), 300);
    };

    const handleNext = () => {
        if (step === 2) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setStep(3);
            }, 2500);
        } else if (step === 3) {
            setStep(4);
            setShowResults(true);
        }
    };

    return (
        <section className="quote-wizard" id="cotizar">
            <div className="container">
                <div className="wizard-header">
                    <span className="badge">Cotización Rápida</span>
                    <h2 className="section-title">Obtén tu seguro en minutos</h2>
                    <p className="section-subtitle">
                        Sin trámites complicados. Solo responde unas preguntas y te mostramos las mejores opciones.
                    </p>
                </div>

                <div className="wizard-card glass">
                    {/* Progress Bar */}
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="progress-text">{Math.round(progress)}% completado</p>

                    <AnimatePresence mode="wait">
                        {/* Step 1: Product Selection */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="wizard-step"
                            >
                                <h3 className="step-title">¿Qué deseas proteger hoy?</h3>
                                <div className="product-grid">
                                    {products.map((product) => (
                                        <div
                                            key={product.id}
                                            className="product-option"
                                            onClick={() => handleProductSelect(product.id)}
                                        >
                                            <div className="product-icon" style={{ color: product.color }}>
                                                {product.icon}
                                            </div>
                                            <h4>{product.name}</h4>
                                            <ChevronRight className="arrow-icon" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Details */}
                        {step === 2 && !isLoading && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="wizard-step"
                            >
                                <h3 className="step-title">Cuéntanos sobre tu vehículo</h3>
                                <div className="form-group">
                                    <label>Placa del vehículo</label>
                                    <input
                                        type="text"
                                        placeholder="ABC-123"
                                        value={formData.placa}
                                        onChange={(e) => setFormData({ ...formData, placa: e.target.value })}
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Marca</label>
                                        <select
                                            value={formData.marca}
                                            onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                                        >
                                            <option value="">Seleccionar</option>
                                            <option value="toyota">Toyota</option>
                                            <option value="nissan">Nissan</option>
                                            <option value="hyundai">Hyundai</option>
                                            <option value="kia">Kia</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Año</label>
                                        <input
                                            type="number"
                                            placeholder="2020"
                                            value={formData.año}
                                            onChange={(e) => setFormData({ ...formData, año: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block" onClick={handleNext}>
                                    Continuar <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        )}

                        {/* Loading State */}
                        {isLoading && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="wizard-step loading-step"
                            >
                                <Loader2 className="spinner" size={48} />
                                <h3 className="step-title">Buscando las mejores opciones...</h3>
                                <p className="loading-text">
                                    Comparando entre Rímac, Pacífico, Mapfre y más aseguradoras
                                </p>
                            </motion.div>
                        )}

                        {/* Step 3: Contact Info */}
                        {step === 3 && !showResults && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="wizard-step"
                            >
                                <h3 className="step-title">¿Dónde enviamos tu cotización?</h3>
                                <div className="form-group">
                                    <label>Nombre completo</label>
                                    <input
                                        type="text"
                                        placeholder="Juan Pérez"
                                        value={formData.nombre}
                                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono / WhatsApp</label>
                                    <input
                                        type="tel"
                                        placeholder="+51 999 999 999"
                                        value={formData.telefono}
                                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                                    />
                                </div>
                                <button className="btn btn-primary btn-block" onClick={handleNext}>
                                    Ver resultados <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        )}

                        {/* Step 4: Results */}
                        {showResults && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="wizard-step results-step"
                            >
                                <h3 className="step-title">¡Encontramos 3 opciones para ti!</h3>
                                <div className="plans-grid">
                                    {/* Plan Esencial */}
                                    <div className="plan-card">
                                        <h4 className="plan-name">Esencial</h4>
                                        <p className="plan-price">S/ 45<span>/mes</span></p>
                                        <ul className="plan-features">
                                            <li><Check size={16} /> Responsabilidad Civil</li>
                                            <li><Check size={16} /> Asistencia 24/7</li>
                                            <li><Check size={16} /> Grúa hasta 50km</li>
                                        </ul>
                                        <button className="btn btn-outline btn-block">Contratar</button>
                                    </div>

                                    {/* Plan Recomendado */}
                                    <div className="plan-card recommended">
                                        <div className="recommended-badge">Recomendado</div>
                                        <h4 className="plan-name">Oro</h4>
                                        <p className="plan-price">S/ 85<span>/mes</span></p>
                                        <ul className="plan-features">
                                            <li><Check size={16} /> Todo lo de Esencial</li>
                                            <li><Check size={16} /> Daños propios</li>
                                            <li><Check size={16} /> Chofer de reemplazo</li>
                                            <li><Check size={16} /> Auto de reemplazo</li>
                                        </ul>
                                        <button className="btn btn-primary btn-block">Contratar ahora</button>
                                    </div>

                                    {/* Plan Total */}
                                    <div className="plan-card">
                                        <h4 className="plan-name">Total</h4>
                                        <p className="plan-price">S/ 120<span>/mes</span></p>
                                        <ul className="plan-features">
                                            <li><Check size={16} /> Todo lo de Oro</li>
                                            <li><Check size={16} /> Robo total</li>
                                            <li><Check size={16} /> Lunas y parabrisas</li>
                                            <li><Check size={16} /> Accidentes personales</li>
                                        </ul>
                                        <button className="btn btn-outline btn-block">Contratar</button>
                                    </div>
                                </div>

                                <div className="guarantee-box">
                                    <p><strong>✓ Incluye asesoría gratuita</strong> de Olivia & Asociados en caso de siniestro</p>
                                    <p className="urgency-text">⏰ Precio garantizado por las próximas 48 horas</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Social Proof */}
                <div className="social-proof">
                    <p>🔥 Más de 500 personas aseguraron su auto este mes con nosotros</p>
                </div>
            </div>
        </section>
    );
};

export default QuoteWizard;
