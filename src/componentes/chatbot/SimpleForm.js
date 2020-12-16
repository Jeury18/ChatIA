import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import Post from './Post';
import ListaServicio from '../servicios/ListaServicio';
import Servicios from '../servicios/Servicios';
import PrecioServicio from '../servicios/PrecioServicio';
import ListaPrecio from '../servicios/ListaPrecio';
import CompraProducto from '../servicios/CompraProducto';

const theme  ={
  background: "#F5F6F2",
  fontFamily: "Segoe UI",
  headerBgColor: "#48157a",
  headerFontColor: "#fff",
  headerFontSize: "25px",
  botBubbleColor: "#D8DADA",
  botFontColor: "#000",
  userBubbleColor: "#06A7E8",
  userFontColor: "#3a4a45",
};

const config ={
  width: "400px",
  height: "500px", 
  floating: true,
  
};

class SimpleForm extends Component {
  render() {
    return (
      
        <ThemeProvider theme  ={theme }>
      <ChatBot
       
       headerTitle="Asistente virtual"
       placeholder="Escriba su mensaje"
       botAvatar="https://blog.jumia.com.ng/wp-content/uploads/2017/09/Jumia_Bot_Logo_Right-1.png"
       userAvatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
       recognitionEnable={true}
       recognitionLang="es"


       steps={[
        {
          id: "1",
          message: `Hola! Profe Tomas, ¡Tenemos los siguientes servicios para usted!`,
          trigger: "sugerencias",
          //trigger: "usuario",
        },
        {
          id: "usuario",
          user: true,
          trigger: ({ value, steps }) => 'servicio',
        },
        {
          id: "servicio",
          component: <Servicios />,
          trigger: "sugerencia2",
        },
        {
          id: "precio-servicios",
          component: <PrecioServicio/>,
          trigger: "sugerencia2",
        },
        {
          id: "comprar",
          component: <CompraProducto />,
          trigger: "sugerencia2",
        },
        {
          id: "no-existe",
          message:
            "La pregunta no es entendible para el asistente virtual, favor escribanos al correo: watchstore@gmail.com",
          trigger: "consultar",
        },
        {
          id: "consultar",
          message:
            "Esto es lo que podemos ofrecerte",
          trigger: "sugerencias",
        },
        {
          id: "sugerencias",
          options: [
            { value: 1, label: "Información sobre el producto", trigger: "servicio" },
            { value: 2, label: "Precio de los servicios", trigger: "precio-servicios" },
            { value: 3, label: "comprar el producto", trigger: "comprar" },
            { value: 4, label: "Deseas algo mas?", trigger: "pregunta" },
            { value: 5, label: "Terminar conversacion", trigger: "terminar" },
          ],
        },
        {
          id: "sugerencia2",
          message: "En que otra cosa le puedo ayudar?",
          trigger: "usuario",
        },
        {
          id: "pregunta",
          message: "¿Cual es su pregunta?.",
          trigger: "usuario",
        },
        {
          id: "terminar",
          message: "Hasta pronto!",
          end: true,
        },
      ]}
       {...config}
      />
      </ThemeProvider>
      
    );
  }
       
}

export default SimpleForm;