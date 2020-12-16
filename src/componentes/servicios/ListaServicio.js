import React, { memo } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const ListaServicio =  memo(({ title, img }) => {
  
   return (

     <div className="card" style={{ width: '100%', backgroundColor:'#97dba4' }}>
      <h4 className="card-header">{title}</h4>
      <div className="card-body">
        <img src={img} style={{ width: '50%' }} className="card-img" alt={title} />
        
      </div>
      
    </div>
       
      
    )
});

export default ListaServicio;
