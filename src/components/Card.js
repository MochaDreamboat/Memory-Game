import { React, useState } from "react";

function Card (props) {
    let { name, img } = props;
    return (
        <div class="card">
          <img src={require(`${img}`)} alt="ashe" />
          <h3>{name.toUpperCase()}</h3>
        </div>
    )
}

let card = {
    name: 'Ashe',
    img: './images/ashe.png',
};