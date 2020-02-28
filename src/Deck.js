import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Deck() {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getDeck() {
      const deckResult = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/"
      );
      setDeck(deckResult.data.deck_id);
    }
    getDeck();
  }, []);

  const getCard = async () => {
    const cardResult = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
    );
    setCards([...cards, cardResult.data.cards[0]]);
  }

  const cardStack = cards.map(card => (
    <Card key={card.code} image={card.image} value={card.value} />
  )
  );
  return (
    <div>
      <button onClick={getCard}>GET CARD</button>
      {cardStack}
    </div>
  )
}



export default Deck;