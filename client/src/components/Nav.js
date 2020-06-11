import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = (props) => {

  return (
    <nav className="site-nav">
      <a id="logo-link" href="/">
        <div className="circleborder">
          <div>TW</div>
        </div>
      </a>

      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/basket">
            <li><i className="fas fa-shopping-basket"></i> {props.basketSize}</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  basketSize: PropTypes.number
}

export default Nav;
