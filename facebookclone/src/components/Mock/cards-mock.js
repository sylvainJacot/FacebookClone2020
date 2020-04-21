import React from "react";
import {imagesLearn} from "../Media/images";
import MapRoutesCode01Screen from "../../media/images/Capture d’écran 2020-04-20 à 16.49.02.png"


const MapRoutesCode02 = (
    <pre>
        <code className={"language-javascript"}>
            {`const Routes = [
        path:\`/Learn/:slug\`,
        exact: false,
        component: TemplateLearn,
    },

]`}
        </code>
        </pre>
);
const MapRoutesCode03 = (
    <pre>
        <code className={"language-javascript"}>
            {`const TemplateLearn = ({match}) => {

    const card = cards.find(({ slug }) => slug === match.params.slug);

    return (
            <TemplateLearnItem
            title={card.title}
            description={card.description}
            contentitems={card.content}
            />
    )
};

export default TemplateLearn;`}
        </code>
        </pre>
);
const MapRoutesCode04 = (
    <pre>
        <code className={"language-javascript"}>
            {`const TemplateLearnItem = (props) => {

    const contentItems = props.contentitems;

    return <>
       <BodyLearn>

                <h2>{props.title}</h2>

                <p>{props.description}</p>

           {contentItems.map((item) => (
               <CodeSnippet
                   explanation={item.explanation}
                   code={item.codecontent}
               />
           ))

           }

       </BodyLearn>
    </>

};

export default TemplateLearnItem;`}
        </code>
        </pre>
);
const MapRoutesCode05 = (
    <pre>
        <code className={"language-javascript"}>
            {`const CodeSnippet = (props) => {
    return <>
        <p>{props.explanation}</p>
        {props.code}

    </>

};
export default CodeSnippet;`}
        </code>
        </pre>
);

export const cards = [
    {
        id: 0,
        title: "Map with react rooter",
        description: "Map components and attribute route for each of them",
        bgimage: imagesLearn.test,
        slug: "MapRoutes-Learn",
        content: [
            {
                explanation: "CardItem will be the Link that will redirect to our TemplateLearn",
                img: MapRoutesCode01Screen,
            },
            {
                explanation: "Prepare your :slug in your routes",
                codecontent: MapRoutesCode02,
            },
            {
                explanation: "Create an intermediate component that will take care of the Route with the slug proprety then return the component that will we mapped (TemplateLearnItem)",
                codecontent: MapRoutesCode03,
            },
            {
                explanation: "TemplateLearnItem includes CodeSnippet that will be mapped, contentItems needs to be props, it is the equivalent of 'card.content'",
                codecontent: MapRoutesCode04,
            },
            {
                explanation: "CodeSnippet is a very simple component",
                codecontent: MapRoutesCode05,
            },

        ]
    },

]




