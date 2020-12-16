import React, { memo } from "react";
import Button from 'react-bootstrap/Button';

export const Producto = memo(({ title, img, precio }) => {
  return (
    <div className="card" style={{ width: '100%', backgroundColor:'#97dba4' }}>
      <h4 className="card-header">{title}</h4>
      <h5 className="card-header">Precio: {precio}</h5>
      <div className="card-body">
        <img src={img} style={{ width: '50%' }}  className="card-img" alt={title} />
      </div>
      <Button style={{ width: '50%', backgroundColor:'#f2d024' }} variant="warning">Comprar</Button>
    </div>
  );
});
export default Producto;