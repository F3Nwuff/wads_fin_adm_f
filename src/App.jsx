import './App.css';
import please_logo from './assets/logo_wads_fin1.png';
import React, { useState, useEffect } from 'react';
import centras from './component/admin1.jsx';
import handleClickLogo from './component/handle/hspare/hlogo.jsx';

function App() {
  const [activeCentra, setActiveCentra] = useState(centras[0]);

  return (
    <div className="all">
      <div className="left">
        <div className='logo1'>
          <img className="logo" src={please_logo} alt='logo' onClick={handleClickLogo} />
        </div>
        {centras.map(centra => (
          <div key={centra.id}
            className={`centra ${centra.id === activeCentra.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCentra(centra);
              
            }}>
            {centra.name}
          </div>
        ))}
      </div>
      <div className="right">
        {activeCentra.batches.map(batch => (
          <div key={batch.name} className="batch-row">
            {batch.steps()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
