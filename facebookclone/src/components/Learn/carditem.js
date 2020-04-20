import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../Styles/colors";
import {Link} from "react-router-dom";


export const StyledLink = styled(Link)`
width: 100%;
height: 100%;
cursor: pointer;
&:after {
position: absolute;
content: "";
display: block;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.primary};
opacity: 80%;

`;

export const CardItemWrapper = styled.div`
width: 400px;
height: 240px;
background-color: ${colorsRoles.primary};
background-image: url("${props => props.bgimage}");
background-size: cover;
border-radius: 24px;
overflow: hidden;
position: relative;
`;

export const TextContent = styled.div`
position: absolute;
content: "";
display: block;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1;
color: white;
padding: 16px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;


const CardItem = (props) => {
    return <>


            <CardItemWrapper bgimage={props.bgimage}>
                <StyledLink to={props.slug}>
                    <TextContent>
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                    </TextContent>
                </StyledLink>
            </CardItemWrapper>


    </>

};

export default CardItem;