import React from 'react';
import '../../../styles/core/_categorys.scss'; 

export const categories = () => {
    return (
      <div className="categories">
        <div className="text-wrapper">Categorias</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="div">Utiles</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="div">Agendas</div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="overlap-2">
            <div className="div">Calendarios</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default categories;

