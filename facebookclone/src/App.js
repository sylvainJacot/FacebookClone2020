import React from 'react';
import styled from "styled-components";
import "./reset.css";
import Header from "./components/Header/Header";

export const Body = styled.body`
width: 100vw;
height: 100vh;
background-color: #F0F2F5;
`;

const App = () => {
  return (
      <Body>
        <Header />
      </Body>

  );
}

export default App;


