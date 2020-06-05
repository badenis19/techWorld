import React from 'react';
import { Link } from 'react-router-dom';

const EmptyMessage = ({message}) => {

  return (
    <div className="empty-message">
      <p>{message}<Link to={`/`}>Go to Products</Link></p>
      {/* <p>No {entityName} yet. <Link to={`${entityName.toLowerCase()}/create`}>{createCopy}</Link></p> */}
    </div>
  )
}

export default EmptyMessage;