import {React, useEffect, useState } from 'react';
import Card from "./components/Card.js";
import deck from "./decks/overwatchDeck.js";

function App() {

  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [cards, modifyCards] = useState(deck);

  // Updates best score if current score exceeds best score.
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  const selectCard = (card) => {
    if (cards[card].picked == true) {
      setScore(0);
      // Needs to shuffle here
      return
    }
    setScore(score + 1);
    modifyCards({
      ...cards,
      [card]: {
        ...cards[card],
        picked: true
      }
    })
    // Shuffle should happen here too
  };

  // Incorporate via Fisher-Yates
  const shuffle = () => {
    
  };

  const resetCards = () => {

  }

  return (
    <main>
      <header>
        <h1>MEMORY GAME</h1>
        <p>Don't click a card more than once!</p>
        <p>SCORE: {score}</p>
        <p>BEST SCORE: {bestScore}</p>
      </header>
      {/* TO-DO: Split draft into respective components */}
      <section id="cards">
        {Object.keys(cards).map((card) => {
          return <Card card={cards[card]} key={card} select={() => selectCard(card)} />
        })}
      </section>
    </main>
  );
}

export default App;
