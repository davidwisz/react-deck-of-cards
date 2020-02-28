import React from 'react';

function Card(props) {
  let {image, value, suit} = props;
  return (
    <div className="Card">
      <img src={image} alt={`${value} of ${suit}`}/>
    </div>
  )
}
export default Card;