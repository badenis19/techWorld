import React from 'react';

const Basket = (props) => {

  return (
    <div>
      <h1>Basket</h1>
      <p>size: {props.basketSize.length}</p>
    </div>
  )

}

export default Basket;