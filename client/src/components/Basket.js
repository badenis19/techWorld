import React from 'react';

const Basket = (props) => {


  const displayBasket = () => {
    if (props.basket) {
      return props.basket.map(product => {
        return (
          <div className="col-12 basket border-bottom">
            <div className="">
              <img className="product-img" key={product.id} src={product.img_url} alt="product" />
              <p className="remove-link">remove</p>
            </div>
            <div className="name">
              <p key={product.id}>{product.name}</p>
            </div>
            <div className="price">
              <p key={product.id}>£{product.price.toFixed(2)}</p>
            </div>
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
        return total += product.price;
      })
    }
    return <p>£{total.toFixed(2)}</p>;
  }

  return (
    <div>
      <h1 className="title">Basket</h1>

      <div className="container">

        <div className="row">
          {displayBasket()}
        </div>

        <div className="clear-basket-and-total-price">
          <div>
            <button className="btn btn-warning" onClick={() => clearBasket()}>Clear</button>
          </div>

          <div>
            <p>{getTotalPrice()}</p>
          </div>
        </div>

        <div className="btn btn-success checkout">Checkout</div>
      </div>

    </div>
  )
}

export default Basket;