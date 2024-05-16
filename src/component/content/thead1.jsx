import { useState, useEffect } from 'react';

function createStepsTHead(id) {
    if (id === 1) {
      return (
        <div className='right3'>
          <div className="table-name">
            <div className="cell">ID</div>
            <div className="cell">Email</div>
            <div className="cell">Password</div>
            <div className="cell">Role</div>
            <div className="cell">Edit</div>
            <div className="cell">Delete</div>
          </div>
        </div>
      );
    } else if (id === 2) {
      return (
        <div className='right3'>
          <div className="table-name">
            <div className="cell">ID</div>
            <div className="cell">Centra</div>
            <div className="cell">Location</div>
            <div className="cell">No. of Emps</div>
            <div className="cell">Edit</div>
            <div className="cell">Delete</div>
          </div>
        </div>
      );
    }
    else {
      return <div>Page not found</div>;
    }
  }

export default createStepsTHead;