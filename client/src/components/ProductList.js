import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // To bind Apollo with React Component
import PropTypes from 'prop-types';

/* Queries */
import { getProductsQuery } from '../queries/queries'
import '../App.scss';

/* Component */
import EmptyMessage from './EmptyMessage';
class ProductList extends Component {
  addProducts(product) {
    product.isInBasket = true;
    this.props.addProduct(product);
  }
  displayProducts() {
    let data = this.props.data;
    if (data.loading) {
      return (<p>Loading Products...</p>)
    } else {
      return data.products.map(product => {
        return (
          <div key={product.id} className="product col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="product-card">
              <div className="product-name">
                <p key={product.id}>{product.name}</p>
              </div>
              <div className="product-image">
                <div className="wrapper">
                  <img key={product.id} src={product.img_url} alt="product" />
                </div>
              </div>
              <div className="price-and-add-button">
                <p key={product.id}>£{product.price.toFixed(2)}</p>
                <button className={product.isInBasket ? "btn disable-button" : "btn btn-success"} onClick={() => this.addProducts(product)}>{product.isInBasket ? "ADDED" : "ADD TO BASKET"}</button>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  render() {
      if (this.props.data.products) {
        return (
          <div className="product-container container">
            <div className="intro col-xs-12 col-sm-12 col-md-12 ">
              <p className="tw-intro">Here at <strong>TechWorld</strong> we sell only the very finest gaming mice on the market today with just one aim: to make it as easy as possible for a gamer to find the right rodent for their intended usage and budget..</p>
            </div>
            <div className="row">
              {this.displayProducts()}
            </div>
          </div>
        )
      }
      return (
        <EmptyMessage message="Product are loading... Please wait" />
      )
  }
}


ProductList.propTypes = {
  addProduct: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default graphql(getProductsQuery)(ProductList); // query result accessible via props
