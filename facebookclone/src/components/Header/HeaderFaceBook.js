import React from "react";
import styled from "styled-components";
import Icons from "../Media/Icons";
import FaceBookLogo from "../../media/icons/Facebook.svg";
import {colorsRoles} from "../Styles/colors";

export const HeaderBox = styled.header`
width: 100%;
height: 60px;
background-color: white;
-webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.08);
-moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.08);
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.08);
`;

export const Logo = styled.img`
width: 64px;
`;

const HeaderFaceBook = () => {
    return <>
        <HeaderBox>
            <Logo src={FaceBookLogo}/>
             <Icons icon="Home" size="40" color={colorsRoles.primary}/>
            <Icons icon="Watch" size="40" color={colorsRoles.primary}/>
            <Icons icon="MarketPlace" size="40" color={colorsRoles.primary}/>
            <Icons icon="Groupes" size="40" color={colorsRoles.primary}/>
        </HeaderBox>
    </>

};

export default HeaderFaceBook;