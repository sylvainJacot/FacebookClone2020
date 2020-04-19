import React from "react";
import cards from "../Mock/cards-mock"
import CardItem from "../Cards/carditem";

const CardsList = () => {
    return <>
        {
            cards.map((card) => (
                <CardItem
                    bgimage={card.bgimage}
                    title={card.title}
                    description={card.description}
                />
            ))
        }
    </>

};

export default CardsList;