import React from 'react';
import "./reset.css";
import {BrowserRouter as Router} from "react-router-dom";
import FaceBookHome from "./components/Pages/facebookhome";
import CardsList from "./components/Pages/cards";
import AppRoutes from "./components/Pages/AppRoutes";


const App = () => {
  return (
      <Router>
            <AppRoutes/>
      </Router>

  );
}

export default App;


