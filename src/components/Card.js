import { React, useState } from "react";

// Takes in card info from cards data structure (array?) and renders w/ event listeners on it.
function Card (props) {
    let { name, img } = props;
    return (
        <div className="card">
          <img src={require(`${img}`)} alt="ashe" />
          <h3>{name.toUpperCase()}</h3>
        </div>
    )
}

let card = {
    name: 'Ashe',
    img: './images/ashe.png',
};