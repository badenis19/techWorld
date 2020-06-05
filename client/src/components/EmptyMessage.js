import React from 'react';
import { Link } from 'react-router-dom';
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

export default EmptyMessage;