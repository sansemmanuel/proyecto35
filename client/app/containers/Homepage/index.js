/**
 *
 * Homepage
 *
 */

import React from 'react';

//import 'client\app\styles\core\_homepage.scss'

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ProductCarousel from '../components/ProductCarousel';
import React, { useEffect } from 'react';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
        <Row className='flex-row justify-content-center align-items-center'>
          <Col >
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
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>


        </Row>

        <div className='color-bar' style={{ backgroundColor: 'white', height: 10 }}>
          {/*div jeje*/}
        </div>
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
                  <div key={index}>
                    <img src={item.imageUrl} alt={`Banner ${index + 1}`} />
                    {/* Puedes agregar más contenido o personalización aquí */}
                  </div>
                ))}
              </CarouselSlider>
            </div>
          </Col>
        </Row>

        <div className='color-bar' style={{ backgroundColor: 'white', height: 10 }}>
          {/* Otros elementos de tu página */}
        </div>
      </div>




    )
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
