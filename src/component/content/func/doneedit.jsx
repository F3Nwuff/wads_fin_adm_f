import React from 'react';
import Popup from 'reactjs-popup';

const Popupdone = () => {
    return(
        <div className='modal1'>
                      <Popup trigger={<button className='done-btn' onClick={() => close()}>Edit</button>} modal nested>
                        {(close) => (
                          <div className='modal-header1'>
                            <div className='popup1'>
                              <div className='popuphead2'>Edit Details</div>
                              <div className='em' />
                              <button className='close-btn' onClick={() => clloseAllPopup()}>X</button>
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
    )
}
export default Popupdone