import React from "react";
import styled from "styled-components";


const CodeSnippet = (props) => {
    return <>
        <pre>
         <code>
         <p>{props.code}</p>
        </code>

      </pre>
    </>

};

export default CodeSnippet;