import React from "react";
import styled from "styled-components";
import Prism from "prismjs";
import "../../Styles/prism.css";
import {ReactRouterCode01} from "../../Mock/cards-mock";

export const BodyLearn = styled.body`
width: 100%;
height: 100%;
background-color: silver;
display: flex;
flex-direction: column;
align-items: center;
`;

const ReactRouterLearn = () => {
    return <>
        <BodyLearn>
            <h2>Routes Learn</h2>
                <ReactRouterCode01/>
         </BodyLearn>
        </>
};

export default ReactRouterLearn;