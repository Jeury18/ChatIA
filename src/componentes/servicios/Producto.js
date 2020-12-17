import React, { memo } from "react";

import Renderizar from '../servicios/Renderizar';
import { Link } from "react-router-dom";

export const Producto = memo(({ title, img, precio }) => {

const  Compra = (params) => {
   alert('Felicidades se vendio');
}

  return (
    <div className="card" style={{ width: '100%', backgroundColor:'#97dba4' }}>
      <h4 className="card-header">{title}</h4>
      <h5 className="card-header">Precio: {precio}</h5>
      <div className="card-body">
        <img src={img} style={{ width: '50%' }}  className="card-img" alt={title} />
      </div>
      <input type="text"></input>
      <button style={{ width: '50%', backgroundColor:'#f2d024' }} variant="warning" onClick={()=>Compra()} >Comprar</button>
      
    </div>
  );
});
export default Producto;