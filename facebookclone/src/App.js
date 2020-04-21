import React from 'react';
import "./reset.css";
import {withRouter, Link} from "react-router-dom";
import AppRoutes from "./components/Pages/AppRoutes";


const App = () => {
  return (
      <>

            <AppRoutes/>
          <Link to="/FacebookClone">Facebook</Link>
          <Link to="/Learn">Cards List</Link>
      </>

  );
}

export default withRouter(App);


