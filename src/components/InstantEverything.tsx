import React from 'react';
import { Zap, Clock } from 'lucide-react';
import './InstantEverything.css';

const InstantEverything: React.FC = () => {
    return (
        <section className="instant-everything">
            <div className="container">
                <h2 className="instant-title">Todo Instantáneo</h2>
                <p className="instant-description">
                    Usamos IA para crear la póliza perfecta para ti, y para pagar reclamos.
                    No podría ser más fácil o rápido.
                </p>

                <div className="instant-stats">
                    <div className="stat-box">
                        <Zap size={64} className="stat-icon" />
                        <h3 className="stat-number">90 segundos</h3>
                        <p className="stat-label">Para obtener tu seguro</p>
                    </div>

                    <div className="stat-box">
                        <Clock size={64} className="stat-icon" />
                        <h3 className="stat-number">3 minutos</h3>
                        <p className="stat-label">Para recibir tu pago</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstantEverything;
