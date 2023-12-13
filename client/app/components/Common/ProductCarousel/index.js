import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                <div key={product.id}>
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.imageUrl} alt={product.name} />
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                    </Link>
                </div>
            ))}
        </Slider>
    );
};

export default ProductCarousel;
