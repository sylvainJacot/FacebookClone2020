import React from "react";
import styled from "styled-components";
import cards from "../Mock/cards-mock"

const CardsList = () => {
    return <>
        {
            cards.map((card) => (
                <div><h1>{card.title}</h1></div>
            ))
        }
    </>

};

export default CardsList;