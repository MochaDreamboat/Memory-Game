import {React, useEffect, useState } from 'react';

function App() {

  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [cards, arrangeCards] = useState({});

  // Updates best score if current score exceeds best score.
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return (
    <main>
      <header>
        <h1>MEMORY GAME</h1>
        <p>Don't click a card more than once!</p>
        <p>SCORE: {score}</p>
      </header>
      {/* TO-DO: Split draft into respective components */}
      <section id="cards">
        {/* <div class="card">
          <img src={require('./images/ashe.png')} alt="ashe" />
          <h3>ASHE</h3>
        </div>
        <div class="card">
          <img src={require('./images/ana.png')} alt="ana" />
          <h3>ANA</h3>
        </div>
        <div class="card">
          <img src={require('./images/baptiste.png')} alt="baptiste" />
          <h3>BAPTISTE</h3>
        </div>
        <div class="card">
          <img src={require('./images/bastion.png')} alt="bastion" />
          <h3>BASTION</h3>
        </div>
        <div class="card">
          <img src={require('./images/brigitte.png')} alt="brigitte" />
          <h3>BRIGITTE</h3>
        </div>
        <div class="card">
          <img src={require('./images/cassidy.png')} alt="cassidy" />
          <h3>CASSIDY</h3>
        </div> */}
      </section>
    </main>
  );
}

export default App;
