import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  
let itemsInBasket = null;

  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/basket">
        <li>Basket {props.basketSize.length}</li>
        </Link>

        <Link to="/contact">
          <li>Contact</li>
        </Link>

      </ul>
    </nav>
  )
}

export default Nav;