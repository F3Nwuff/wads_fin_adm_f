// PopupComponent.jsx
import React from 'react';
import Popup from 'reactjs-popup';
import Popupdone from './doneedit';

const PopupComponent = ({ role, num, roleChange, numChange}) => {
  return (
    <div className='cella1'>
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
                        <select value={role} onChange={roleChange}>
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
                        <select value={num} onChange={numChange}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </form>
                    </div>
                    <Popupdone/>
                  </div>
                )}
              </Popup>
              </div>
  );
};

export default PopupComponent;
