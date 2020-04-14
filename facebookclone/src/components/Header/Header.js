import React from "react";
import styled from "styled-components";
import icons from "../media/icons";

export const HeaderBox = styled.header`
width: 100%;
height: 60px;
background-color: white;
-webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.08);
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.08);
`;

const Header = () => {
    return <>
        <HeaderBox>
            <img src={icons.facebook} />
        </HeaderBox>
    </>

};

export default Header;