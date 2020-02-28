import React from 'react';

function Card({ image, value, suit, style }) {
  return (
    <div className="Card">
      <img src={image} alt={`${value} of ${suit}`} style={style} />
    </div>
  )
}
export default Card;