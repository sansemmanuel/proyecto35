import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ products }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Número de productos a mostrar en cada slide
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {products.map((product) => (
                <div key={product.id} className="carousel-item">
                    <Link to={`/product/${product.slug}`} className="product-link">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h4 className="product-name">{product.name}</h4>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </Slider>
    );
};

export default ProductCarousel;
