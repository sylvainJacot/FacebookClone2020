import React from 'react';
import styled from "styled-components";
import "./reset.css";
import FaceBookHome from "./components/Pages/facebookhome";
import CardsList from "./components/Pages/cards";

export const Body = styled.body`
width: 100vw;
height: 100vh;
background-color: #F0F2F5;
`;

const App = () => {
  return (
      <Body>
        <FaceBookHome />
        <CardsList/>
      </Body>

  );
}

export default App;


