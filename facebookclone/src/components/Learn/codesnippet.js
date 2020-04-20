import React from "react";
import styled from "styled-components";
import {BodyLearn} from "../Pages/cards/template-learn-item";


const CodeSnippet = (props) => {
    return <>
        <p>{props.explanation}</p>
        {props.img && (
            <img src={props.img}/>
        )}
        {props.code}
    </>

};
export default CodeSnippet;