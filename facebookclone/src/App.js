import React from 'react';
import "./reset.css";
import {withRouter, Link} from "react-router-dom";
import FaceBookHome from "./components/Pages/facebookhome";
import CardsList from "./components/Pages/cards";
import AppRoutes from "./components/Pages/AppRoutes";


const App = () => {
  return (
      <>
        <Link to="/FacebookClone">Facebook</Link>
        <Link to="/Learn">Cards List</Link>
            <AppRoutes/>
      </>

  );
}

export default withRouter(App);


