import React from 'react';
import handleClickDelete from '../../handle/hdel';

const DeleteButton = () => {
  return (
    <div className="cellb1">
      <button className="cellb" onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

export default DeleteButton;