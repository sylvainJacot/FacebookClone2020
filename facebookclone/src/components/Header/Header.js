import React from "react";
import styled from "styled-components";
import icons from "../Media/icons";
import WatchIcon from "../Media/icons/WatchIcon";
import MarketPlace from "../Media/icons/MarketPlace";
import MarketPlacePlain from "../Media/icons/MarkPlacePlain";

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
            <MarketPlace fill={"blue"}/>
            <MarketPlacePlain fill={"blue"}/>
        </HeaderBox>
    </>

};

export default Header;