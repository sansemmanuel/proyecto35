import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ProductCarousel from './../../components/Common/CarouselSlider';
import React, { useEffect } from 'react';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Homepage extends React.PureComponent {
  componentDidMount() {
    // Llama a la acción para cargar todos los productos
    this.props.fetchProducts();
  }
  render() {
    const { featuredProducts } = this.props;

    return (
      <div className='homepage'>
        {/* Carrusel principal */}
        <Row className='flex-row justify-content-center align-items-center'>
          <Col>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} alt={`Banner ${index}`} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
        </Row>

        {/* Barra de color */}
        <div className='color-bar' style={{ backgroundColor: 'white', height: 10 }}>
          {/* Contenido opcional */}
        </div>

        {/* Sección de productos destacados */}
        <Row className='flex-row justify-content-center align-items-center'>
          <Col>
            <div>
              <h2>Productos Destacados</h2>
              {featuredProducts && featuredProducts.length > 0 && (
                <ProductCarousel products={featuredProducts} />
              )}
            </div>
          </Col>
        </Row>

        {/* Otra barra de color u otros elementos de la página */}
        <div className='color-bar' style={{ backgroundColor: 'white', height: 10 }}>
          {/* Contenido opcional */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    featuredProducts: state.featuredProducts, // Ajusta esto según cómo almacenes tus productos destacados en el estado
  };
};

export default connect(mapStateToProps, actions)(Homepage);
