import React from 'react';
import { Car, Heart, Home, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    icon: React.ReactElement;
}

const products: Product[] = [
    {
        id: 'auto',
        name: 'Seguro de Auto',
        description: 'Protege tu vehículo, pasajeros y el planeta',
        price: 'Desde S/ 80/mes',
        icon: <Car size={48} />
    },
    {
        id: 'vida',
        name: 'Seguro de Vida',
        description: 'Protegiendo a las personas que amas',
        price: 'Desde S/ 25/mes',
        icon: <Heart size={48} />
    },
    {
        id: 'hogar',
        name: 'Seguro de Hogar',
        description: 'Cobertura para tu casa y tus cosas',
        price: 'Desde S/ 60/mes',
        icon: <Home size={48} />
    },
    {
        id: 'salud',
        name: 'Seguro de Salud',
        description: 'Acceso a las mejores clínicas del país',
        price: 'Desde S/ 150/mes',
        icon: <Shield size={48} />
    }
];

const ProductGrid: React.FC = () => {
    return (
        <section className="product-grid-lemonade" id="productos">
            <div className="container">
                <div className="products-header">
                    <h2 className="products-title">Precios Increíbles. Suscripción Mensual. Descuentos al Combinar.</h2>
                    <p className="products-subtitle">Ahorro increíble cuando combinas productos</p>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card-grid">
                            <div className="product-icon-grid">{product.icon}</div>
                            <h3 className="product-name-grid">{product.name}</h3>
                            <p className="product-description-grid">{product.description}</p>
                            <p className="product-price-grid">{product.price}</p>
                            {product.id === 'auto' ? (
                                <Link to="/seguros/auto" className="btn-product-grid">
                                    Ver precio <ChevronRight size={18} />
                                </Link>
                            ) : (
                                <a href="#contacto" className="btn-product-grid">
                                    Ver precio <ChevronRight size={18} />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
