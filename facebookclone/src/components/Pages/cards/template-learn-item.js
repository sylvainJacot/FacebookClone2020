import React from "react";
import styled from "styled-components";
import CodeSnippet from "../../Learn/codesnippet";

export const BodyLearn = styled.body`
width: 100%;
height: 100%;
background-color: silver;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const TemplateLearnItem = (props) => {

    const contentItems = props.contentitems;

    return <>
       <BodyLearn>

                <h2>{props.title}</h2>

                <p>{props.description}</p>

           {contentItems.map((item) => (
               <CodeSnippet
                   explanation={item.explanation}
                   code={item.codecontent}
                   img={item.img}
               />
           ))

           }

       </BodyLearn>
    </>

};

export default TemplateLearnItem;

