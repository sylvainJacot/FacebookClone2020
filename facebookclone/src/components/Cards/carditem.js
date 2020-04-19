import React from "react";
import styled from "styled-components";

export const CardItemWrapper = styled.div`
width: 400px;
height: 240px;
background-image: url("${props => props.bgimage}");
background-size: cover;
`;

const CardItem = (props) => {
    return <>

        <CardItemWrapper bgimage={props.bgimage}>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </CardItemWrapper>

    </>

};

export default CardItem;