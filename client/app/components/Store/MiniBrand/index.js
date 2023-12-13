import React from 'react';
import { Link } from 'react-router-dom';

const MiniBrand = props => {
  const { items, toggleItem, itemType } = props;

  const handleMenuItemClick = () => {
    toggleItem();
  };

  return (
    <div className='mini-brand-list'>
      <div className='d-flex align-items-center justify-content-between min-brand-title'>
        <h4 className='mb-0 text-uppercase'>{itemType}</h4>
        <Link
          to={`/shop/category`} // Puedes ajustar la ruta según tus necesidades
          className='redirect-link'
          role='menuitem'
          onClick={handleMenuItemClick}
        >
          See all
        </Link>
      </div>
      <div className='mini-brand-block'>
        {items.map((item, index) => (
          <div key={index} className='brand-item'>
            <Link
              to={`/shop/category/${item.slug}`}
              className='brand-link'
              role='menuitem'
              onClick={handleMenuItemClick}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniBrand;
