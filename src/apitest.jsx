import './App.css';
import please_logo from './assets/logo_wads_fin1.png';
import please_menu from './assets/menu_fin.png';
import please_prof from './assets/prof_fin1.png';
import please_set from './assets/set_fin.png';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Apptest() {
  const centras = [
    {
      id: 1,
      name: 'User Management',
      batches: [
        { name: 'right1', steps: createStepsMenu },
        { name: 'right2', steps: () => createStepsAdd(1) },
        { name: 'right3', steps: () => createStepsTHead(1) },
        { name: 'right4', steps: () => createStepsTable(1) }
      ]
    },
    {
      id: 2,
      name: 'Centra Management',
      batches: [
        { name: 'right1', steps: createStepsMenu },
        { name: 'right2', steps: () => createStepsAdd(2) },
        { name: 'right3', steps: () => createStepsTHead(2) },
        { name: 'right4', steps: () => createStepsTable(2) }
      ]
    },
    {
      id: 3,
      name: 'User Management',
      batches: [
        { name: 'right1', steps: createStepsMenu },
        { name: 'right2', steps: () => createStepsAdd(3) },
        { name: 'right3', steps: () => createStepsTHead(3) },
        { name: 'right4', steps: () => createStepsTable(3) }
      ]
    },
    {
      id: 4,
      name: 'User Management',
      batches: [
        { name: 'right1', steps: createStepsMenu },
        { name: 'right2', steps: () => createStepsAdd(4) },
        { name: 'right3', steps: () => createStepsTHead(4) },
        { name: 'right4', steps: () => createStepsTable(4) }
      ]
    }
  ];

  const [activeCentra, setActiveCentra] = useState(centras[0]);
  const [dynamicBatches, setDynamicBatches] = useState([...activeCentra.batches]);
  const [role, setRole] = useState("Centra");
  const [num, setNum] = useState("1");


  console.log(activeCentra)


  useEffect(() => {
    setDynamicBatches([...activeCentra.batches]);
  }, [activeCentra]);

  function createStepsMenu() {
    return (
      <div className='right1'>
        <div className='menu1'>
          <img className='menu' src={please_menu} alt='menu' onClick={handleClickMenu} />
        </div>
        <div className='em' />
        <div className='prof1'>
          <img className='prof' src={please_prof} alt='prof' onClick={handleClickProfile} />
          <div className='admins'>
            <div className='adname'>Admin Name</div>
            <div className='adid'>Admin ID</div>
          </div>
        </div>
      </div>
    );
  }

  function createStepsAdd(id) {
    if (id === 1) {
      return (
        <div className='right2'>
          <div className='add1'>
            <button className='add' onClick={handleClickAdd}>
              Add User
            </button>
          </div>
          <div className='em' />
          <div className='set1'>
            <img className='set' src={please_set} alt='set' onClick={handleClickSetting} />
          </div>
        </div>
      );
    } else if (id === 2) {
      return (
        <div className='right2'>
          <div className='add1'>
            <button className='add' onClick={handleClickAdd}>
              Add Centra
            </button>
          </div>
          <div className='em' />
          <div className='set1'>
            <img className='set' src={please_set} alt='set' onClick={handleClickSetting} />
          </div>
        </div>
      );
    } else if (id === 3) {
      return (
        <div className='right2'>
          <div className='add1'>
            <button className='add' onClick={handleClickAdd}>
              Add Item
            </button>
          </div>
          <div className='em' />
          <div className='set1'>
            <img className='set' src={please_set} alt='set' onClick={handleClickSetting} />
          </div>
        </div>
      );
    } else if (id === 4) {
      return (
        <div className='right2'>
          <div className='add1'>
            <button className='add' onClick={handleClickAdd}>
              Add Supplier
            </button>
          </div>
          <div className='em' />
          <div className='set1'>
            <img className='set' src={please_set} alt='set' onClick={handleClickSetting} />
          </div>
        </div>
      );
    }
    else {
      return <div>Page not found</div>;
    }
  }

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
    } else if (id === 3) {
      return (
        <div className='right3'>
          <div className="table-name">
            <div className="cell">ID</div>
            <div className="cell">Name</div>
            <div className="cell">Location</div>
            <div className="cell">Contact Info</div>
            <div className="cell">Edit</div>
            <div className="cell">Delete</div>
          </div>
        </div>
      );
    } else if (id === 4) {
      return (
        <div className='right3'>
          <div className="table-name">
            <div className="cell">ID</div>
            <div className="cell">Centra</div>
            <div className="cell">Powder</div>
            <div className="cell">Date Delivered</div>
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

  function createStepsTable(id) {
    function tableContent() {
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
      } else if (id === 3) {
        return (
          <>
            <div className="cell">Name</div>
            <div className="cell">Location</div>
            <div className="cell">Contact Info</div>
          </>
        );
      } else if (id === 4) {
        return (
          <>
            <div className="cell">Centra</div>
            <div className="cell">Provider</div>
            <div className="cell">Date Delivered</div>
          </>
        );
      } 
      else {
        return <div>Page not found</div>;
      }
    }


    const roleChange = (event) => {
      setRole(event.target.value);
    };

    const numChange = (event) => {
      setNum(event.target.value);
    };

    return (
      <div className='rightlast'>
        <div className='right4' key={id}>
          <br className='space' />
          <div className="table">
            <div className="cell">ID</div>
            {tableContent()}
            <div className="cella1">
              <Popup trigger={<button className="cella">?</button>} modal nested>
                {(close) => (
                  <div className='modal-header'>
                    <div className='popup1'>
                      <div className='popuphead1'>Edit Details</div>
                      <div className='em' />
                      <button className='close-btn' onClick={() => close()}>X</button>
                    </div>
                    <div className='modal'>
                      <div className='modaltext'>User Id</div>
                      <div className='uid'>User Id</div>
                    </div>
                    <div className='modal'>
                      <div className='modaltext'>First Name</div>
                      <input className='fname' type="text" name="fname" />
                    </div>
                    <div className='modal'>
                      <div className='modaltext'>Last Name</div>
                      <input className='fname' type="text" name="fname" />
                    </div>
                    <div className='modal'>
                      <div className='modaltext'>Email</div>
                      <input className='fname' type="text" name="fname" />
                    </div>
                    <div className='modal'>
                      <div className='modaltext'>Password</div>
                      <input className='fname' type="text" name="fname" />
                    </div>
                    <div className='modal'>
                      <div className='modaltext'>Current Password</div>
                      <input className='fname' type="text" name="fname" />
                    </div>
                    <div className='modal'>
                      <div className='modaltext'>Role</div>
                      <form>
                        <select className='opt' value={role} onChange={roleChange}>
                          <option value="Admin">Admin</option>
                          <option value="Centra">Centra</option>
                          <option value="Harbor">Harbor</option>
                          <option value="xyz">xyz</option>
                        </select>
                      </form>
                    </div>
                    <div className='modal'>
                      <div className='modaltext'></div>
                      <form>
                        <select className='opt' value={num} onChange={numChange}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </form>
                    </div>
                    <div className='modal1'>
                      <Popup trigger={<button className='done-btn' onClick={() => close()}>Edit</button>} modal nested>
                        {(close) => (
                          <div className='modal-header1'>
                            <div className='popup1'>
                              <div className='popuphead2'>Edit Details</div>
                              <div className='em' />
                              <button className='close-btn' onClick={() => close()}>X</button>
                            </div>
                            <div className='modal'>
                              <div className='modaltext'>Admin Password</div>
                              <input className='fname' type="text" name="fname" />
                            </div>
                            <div className='modal1'>
                              <button className='done-btn1' onClick={() => close()}>Save</button>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="cellb1">
              <button className="cellb" onClick={handleClickDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function handleClickAdd() {
    const newBatch = {
      name: `right4-${Date.now()}`, // Unique name
      steps: () => createStepsTable(activeCentra.id),
    };

    setDynamicBatches(prevBatches => [...prevBatches, newBatch]);
  }

  function handleClickLogo() {
    alert('Image clicked!');
  }

  function handleClickMenu() {
    alert('Image clicked!');
  }

  function handleClickProfile() {
    alert('Image clicked!');
  }

  function handleClickSetting() {
    alert('Image clicked!');
  }

  function handleClickDelete() {
    alert('Image clicked!');
  }

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
              setDynamicBatches([...centra.batches]); // Reset to the original batches when switching centras
            }}>
            {centra.name}
          </div>
        ))}
      </div>
      <div className="right">
        {dynamicBatches.map(batch => (
          <div key={batch.name} className="batch-row">
            {batch.steps()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apptest;