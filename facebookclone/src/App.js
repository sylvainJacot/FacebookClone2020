import React from 'react';
import "./reset.css";
import {withRouter} from "react-router-dom";
import FaceBookHome from "./components/Pages/facebookhome";
import CardsList from "./components/Pages/cards";
import AppRoutes from "./components/Pages/AppRoutes";


const App = () => {
  return (
            <AppRoutes/>

  );
}

export default withRouter(App);


