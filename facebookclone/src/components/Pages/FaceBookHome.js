import React from "react";
import styled from "styled-components";
import HeaderFaceBook from "../Header/HeaderFaceBook";

export const Body = styled.body`
width: 100vw;
height: 100vh;
background-color: #F0F2F5;
`;

const FaceBookHome = () => {
    return <>
       <Body>
        <HeaderFaceBook />
       </Body>
    </>

};

export default FaceBookHome;