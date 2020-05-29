import React from 'react';

const Basket = (props) => {


  const displayBasket = () => {
    if (props.basket) {
      return props.basket.map(product => {
        return (
          <div>
            <p key={product.id}>{product.name}</p>
            <p key={product.id}>{product.price}</p>
            <img key={product.id} src={product.img_url} alt="product" />
          </div>
        )
      })
    }
  }

  const clearBasket = () => {
    props.setProductsInBasket([])
  }

  const getTotalPrice = () => {
    let total = 0;
    if (props.basket) {
      props.basket.map((product) => {
      total += product.price;
      })
    }
    return <p>£{total}</p>;
  }

  return (
    <div>
      <h1>Basket</h1>
      {displayBasket()}
      <p>Total Price:</p>
      {getTotalPrice()}
      <button onClick={() => clearBasket()}>CLEAR BASKET</button>
      
      <button>Checkout</button>
    </div>
  )
}

export default Basket;