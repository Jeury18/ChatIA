import React from 'react'
import Menu from '../componentes/chatbot/Menu/Menu';
import { Switch, Route, Redirect } from "react-router-dom";
import SimpleForm from "../componentes/chatbot/SimpleForm"

export const Renderizado = () => {
    return (
        <>
      <Menu />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/chatbot" component={SimpleForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
    )
}
