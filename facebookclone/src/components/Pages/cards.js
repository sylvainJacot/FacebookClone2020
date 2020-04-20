import React from "react";
import styled from "styled-components";
import {cards} from "../Mock/cards-mock"
import CardItem from "../Learn/carditem";

export const CardsListContainer = styled.div`
display: flex;
flex-wrap: wrap;
`;

const CardsList = () => {
    return <>
        <CardsListContainer>
        {
            cards.map((card) => (
                <CardItem
                    bgimage={card.bgimage}
                    title={card.title}
                    description={card.description}
                    slug={card.slug}
                />
            ))
        }
        </CardsListContainer>
    </>

};

export default CardsList;