import React from 'react';
import EmptyMessage from './EmptyMessage'
import '../App.scss';
import PropTypes from 'prop-types';

const Basket = (props) => {

  // if basket exists + is not empty + has a length
  const hasProducts = (props.basket && props.basket !== null) && props.basket.length;

  const handleRemoveClick = (product) => {
    props.removeProduct(product.id)
    product.isInBasket = false;
  }

  const displayBasket = () => {
    if (props.basket) {
      return props.basket.map(product => {
        return (
          <div key={product.id} className="col-12 basket border-bottom">
            <div className="">
              <img className="product-img" key={product.id} src={product.img_url} alt="product" />
              <p className="remove-link" onClick={() => handleRemoveClick(product)}>remove</p>
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
    props.basket.forEach(item => {
      item.isInBasket = false;
    })
    props.setProductsInBasket([]);
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

  if (hasProducts) {
    return (
      <div>
        <h1 className="title">Basket</h1>
        <div className="container basket-container">
          <div className="row">
            {displayBasket()}
          </div>
          <div className="clear-basket-and-total-price">
            <div>
              <button className="btn btn-warning" onClick={() => clearBasket()}>Clear</button>
            </div>
            <div>
              {getTotalPrice()}
            </div>
          </div>
          <div className="checkout">
            <div className="btn btn-success checkout-btn">Checkout</div>
          </div>
        </div>
      </div>
    )
  } else {
    return <EmptyMessage message="There are no products in your Basket." entity="product" />
  }
}

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
  setProductsInBasket: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
}

export default Basket;
