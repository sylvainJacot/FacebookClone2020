import React from "react";
import Prism from "prismjs";
import "../../Styles/prism.css";
import {cards} from "../../Mock/cards-mock";
import TemplateLearnItem from "./template-learn-item";

const TemplateLearn = ({match}) => {

    const card = cards.find(({ slug }) => slug === match.params.slug);

    return (
            <TemplateLearnItem
            title={card.title}
            description={card.description}
            contentitems={card.content}
            />
    )
};

export default TemplateLearn;