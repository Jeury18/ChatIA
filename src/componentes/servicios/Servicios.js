import React, { memo } from "react";
import { useFetch } from "../Fetch/useFetch";
import { ListaServicio } from "./ListaServicio";
import Json from '../servicios/Json';

const Servicios = memo(() => {
 const url = `https://pruebachatbots.herokuapp.com/api/servicio`;
  const { loading, data } = useFetch(url);
//const {loading, data} = fetch(Json);
  return (
    <>
      {loading ? (
        <div className="text-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      ) : data.data.length ? (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>Información sobre el producto</h3>
          </li>

          {data.data[0].tipo_vs_servicios.map((v) => {
            const {
              servicio: { id, descripcion, img },
            } = v;

            return (
              <li key={id} className="list-group-item">
                <ListaServicio title={descripcion} img={img} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="list-group list-group-flush">
          <li key="servicios" className="list-group-item">
            <h3>No hay servicios disponibles</h3>
          </li>
        </ul>
      )}
    </>
  );
});

export default Servicios;