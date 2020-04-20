import React from "react";
import styled from "styled-components";
import Prism from "prismjs";
import "../../Styles/prism.css";

export const BodyLearn = styled.body`
width: 100%;
height: 100%;
background-color: silver;
display: flex;
flex-direction: column;
align-items: center;
`;

const RoutesLearn = () => {
    return <>
        <BodyLearn>
            <h2>Routes Learn</h2>
            <pre>
                <code className={"language-javascript"}>
                    {`const RoutesLearn = () => {
    return <>
        <BodyLearn>
            <h2>Routes Learn</h2>
            <pre>
                <code className={"language-react"}>
                    {\`
                .btn--green {
                background-color: #bada55;
                }
                        
                        \`}
                </code>
            </pre>
         </BodyLearn>
        </>
};

export default RoutesLearn;`}
                </code>
            </pre>
         </BodyLearn>
        </>
};

export default RoutesLearn;