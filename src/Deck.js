import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Deck() {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const BASE_URL = `https://deckofcardsapi.com/api/deck`

  // Sets up deck
  useEffect(() => {
    async function getDeck() {
      const deckResult = await axios.get(
        `${BASE_URL}/new/shuffle/?deck_count=1`
      );
      setDeck(deckResult.data.deck_id);
    }
    getDeck();
  }, []);

  // Gets one card
  const getCard = async () => {
    try {
      const cardResult = await axios.get(
        `${BASE_URL}/${deck}/draw/?count=1`
      );
      setCards([...cards, cardResult.data.cards[0]]);

      if (!cardResult.data.remaining) {
        alert(`Error: no cards remaining!`);
        setShowButton(shown => !shown);
      }

    } catch (err) {
      return (err);
    }
  }

  // Array of cards
  const cardStack = cards.map(card => {
    let randomDegrees = Math.floor(Math.random() * Math.floor(45));
    let randomDirection = Math.random() < .5 ? '-' : '';
    let newStyle = {
      transform: `rotate(${randomDirection}${randomDegrees}deg)`
    };
    return <Card key={card.code} image={card.image} value={card.value} suit={card.suit} style={newStyle}/>
  });

  return (
    <div>
      {showButton ? <button onClick={getCard}>GET CARD</button> : null}
      {cardStack}
    </div>
  )
}

export default Deck;