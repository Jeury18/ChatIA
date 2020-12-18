import React, { memo, useState } from "react";
import swal from 'sweetalert';


export const Producto = memo(({id, title, img, precio,cantidadPro }) => {

  const [cantidad,setCantidad]=useState(0)
  const [cantidaDisponible,setCantidadDisponible]=useState(cantidadPro)


const  Compra = async (params) => {
  if(cantidad>cantidadPro){
    swal(`La cantidad disponible son:${cantidadPro}`, "Ha superado el límite en stock.", "warning");
    return;
  }
  const url = `http://localhost:5660/api/compra`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id_producto :id,
        cantidad : cantidad,
        precio,
        total:cantidad*precio,
        correo:"ariel.rd.004@hotmail.com"
    })
});
swal("Compra realizada con existo", "La factura se le envio por correo", "success");
setCantidad(0)
setCantidadDisponible(cantidaDisponible-cantidad)
}

 const  handleChange = (event) => {
   setCantidad(event.target.value);
}



  return (
    <div className="card" style={{ width: '100%', backgroundColor:'#97dba4' }}>
      <h4 className="card-header">{title}</h4>
      <h5 className="card-header">Precio: {precio}</h5>
      <h5 className="card-header">Stock: {cantidaDisponible}</h5>
      <div className="card-body">
        <img src={img} style={{ width: '50%' }}  className="card-img" alt={title} />
      </div>
      Cantidad:<input value={cantidad} min="1" max={cantidaDisponible} onChange={handleChange}  type="number"></input>
      <button style={{ width: '50%', backgroundColor:'#f2d024' }} variant="warning" onClick={Compra} >Comprar</button>
      
    </div>
  );
});
export default Producto;