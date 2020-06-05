import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // To bind Apollo with React Component


/* Queries */
import { getProductsQuery } from '../queries/queries'

import '../App.scss'

/* Component */
import EmptyMessage from './EmptyMessage';

class ProductList extends Component {

  addProducts(product) {
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
                <button className="btn btn-success" onClick={() => this.addProducts(product)}>ADD TO BASKET</button>
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
          <div className="container">
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

export default graphql(getProductsQuery)(ProductList); // query result accessible via props
