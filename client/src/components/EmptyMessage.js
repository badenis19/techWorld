import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.scss';

const EmptyMessage = ({ message, entity }) => {

  if (entity) {
    return (
      <div className="empty-message">
        <p>{message}<Link to={`/`}> Go to Products</Link></p>
      </div>
    )
  } else {
    return (
      <div className="empty-message">
        <p>{message}</p>
      </div>
    )
  }
}

EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired,
  entity: PropTypes.string
}

export default EmptyMessage;
