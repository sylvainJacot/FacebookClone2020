import React from "react";
import styled from "styled-components";


const CodeSnippet = (props) => {
    return <>
        <p>{props.explanation}</p>
        {props.code}

    </>

};
export default CodeSnippet;