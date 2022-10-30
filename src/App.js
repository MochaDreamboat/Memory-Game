import { React, useEffect, useState, useCallback } from "react";
import Card from "./components/Card.js";
import deck from "./decks/overwatchDeck.js";

function App() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [cards, modifyCards] = useState(deck);

  const deckKeys = Object.keys(cards);
  let [order, changeOrder] = useState(deckKeys);
  let [gameDidStart, changeStart] = useState(false);

  const shuffle = useCallback(() => {
    const deckCopy = order;
    for (let i = 0; i < deckCopy.length - 2; i++) {
      let j = Math.floor(Math.random() * (deckCopy.length - i) + i); // Generate random integer between and including in and j.
      let cardOne = deckCopy[i];
      let cardTwo = deckCopy[j];

      deckCopy[i] = cardTwo;
      deckCopy[j] = cardOne;
      changeOrder(deckCopy);
      }
      }, [order]);

  useEffect(() => {
    changeStart(true);
  }, []);

  useEffect(() => {
    if (gameDidStart) {
      shuffle();
    }
  }, [gameDidStart, shuffle]);

  // Updates best score if current score exceeds current best score.
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    shuffle();
  }, [score, bestScore, shuffle]);

  const selectCard = (card) => {
    if (cards[card].picked === true) {
      console.log(cards[card].picked);
      setScore(0);
      resetCards();
      return
    }
    setScore(score + 1);
    modifyCards({
      ...cards,
      [card]: {
        ...cards[card],
        picked: true
      },
    });
  };

  // Must reset every card in deck to unpicked.
  const resetCards = () => {
    modifyCards({...deck});
  };

  return (
    <main>
      <header>
        <h1>MEMORY GAME</h1>
        <p>Don't click a card more than once!</p>
        <p>SCORE: {score}</p>
        <p>BEST SCORE: {bestScore}</p>
      </header>
      <section id="cards">
        {order.map((card) => {
          return (
            <Card
              card={cards[card]}
              key={card}
              select={() => selectCard(card)}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
