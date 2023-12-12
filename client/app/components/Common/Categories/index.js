import React from 'react';
import '../../../styles/core/_categorys.scss'; 

export const categories = () => {
    return (
      <div className="hot-category">
      <div className="overlap-group">
        <p className="explore-new-and">EXPLORE NUESTRAS CATEGORIAS</p>
        <div className="card-2" />
      </div>
      <div className="card-3" />
      <div className="card-4" />
      <Card className="card-instance" ribbonType="sale" status="normal" type="item-category" />
      <div className="card-5" />
    </div>
  );
};
  
  export default categories;

