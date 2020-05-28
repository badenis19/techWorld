import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // To bind Apollo with React Component

/* Queries */
import { getProductsQuery } from '../queries/queries'

/* Component */

class ProductList extends Component {

  handleClick(dataa){
    this.props.addProduct(dataa)
    // console.log(dataa); 
  }

  displayProducts() {
    let data = this.props.data;
 
    if (data.loading) {
      return (<p>Loading Products...</p>)
    } else {
      return data.products.map(product => {
        return (
          <div>
            <p key={product.id}>{product.name}</p>
            <p key={product.id}>{product.price}</p>
            <img key={product.id} src={product.img_url} alt="product" />
            <button onClick={() => this.handleClick(product)}>Add</button>
          </div>
        )
      })
    }
  }


  render() {
    console.log(this.props)
    return (
      <div>
        {this.displayProducts()}
      </div>
    )
  }
}

export default graphql(getProductsQuery)(ProductList); // query result accessible via props