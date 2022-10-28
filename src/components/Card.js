import { React, useState } from "react";

// Takes in card info from cards data structure (array?) and renders w/ event listeners on it.
function Card (props) {
    let { card, key } = props;
    return (
        <div className="card" key={key}>
          <img src={require(`../images/${card.image}`)} alt="ashe" />
          <h3>{card.name.toUpperCase()}</h3>
        </div>
    )
}

export default Card;