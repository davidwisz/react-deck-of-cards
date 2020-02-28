import React from 'react';

function Card(props) {
  let {image, value, suit} = props;
  return (
    <div class="Card">
      <img src={image} alt={`${value} of ${suit}`}/>
    </div>
  )
}
export default Card;