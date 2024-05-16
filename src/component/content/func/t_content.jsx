import { useState, useEffect } from 'react';

function tableContent(id) {
    if (id === 1) {
      return (
        <>
          <div className="cell">Email</div>
          <div className="cell">Password</div>
          <div className="cell">Role</div>
        </>
      );
    } else if (id === 2) {
      return (
        <>
          <div className="cell">Centra</div>
          <div className="cell">Location</div>
          <div className="cell">No. of emps</div>
        </>
      );
    } 
    else {
      return <div>Page not found</div>;
    }
  }

  export default tableContent;