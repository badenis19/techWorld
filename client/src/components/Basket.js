import React from 'react';

const Basket = (props) => {
  

  const displayBasket = () => {
    if (props.basket) {
      return props.basket.map(product => {
        return (
          <div>
            <p key={product.id}>{product.name}</p>
            {/* <p key={product.id}>{product.price}</p>
            <img key={product.id} src={product.img_url} alt="product" /> */}
          </div>
        )
      })
    }
  }

  const clearBasket = () => {
    props.setProductsInBasket([])
  }

  return (
    <div>
      <h1>Basket</h1>
      <button onClick={() => clearBasket()}>CLEAR BASKET</button>
      {displayBasket()}
    </div>
  )
}

export default Basket;