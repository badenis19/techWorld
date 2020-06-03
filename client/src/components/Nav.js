import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

  return (
    <nav className="site-nav">
      <div>
        <h2>TW</h2>
      </div>

      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/basket">
            <li>Basket ({props.basketSize})</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;