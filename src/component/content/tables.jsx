// TableComponent.jsx
import React, { useState } from 'react';
import DeleteButton from './func/delbtn.jsx';
import tableContent from './func/t_content';
import PopupComponent from './func/editbtn';

const createStepsTable = (id) => {
  const [role, setRole] = useState("Centra");
  const [num, setNum] = useState("1");

  const roleChange = (event) => {
    setRole(event.target.value);
  };

  const numChange = (event) => {
    setNum(event.target.value);
  };
  console.log(tableContent.id)
  return (
    <div className='rightlast'>
      <div className='right4' key={id}>
        <br className='space' />
        <div className="table">
          <div className="cell">ID</div>
          {tableContent(id)}
          <PopupComponent role={role} num={num} roleChange={roleChange} numChange={numChange} />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default createStepsTable;
