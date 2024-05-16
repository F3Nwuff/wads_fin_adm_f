import handleClickAdd from "../handle/hadd1.jsx";
import setting from '../../assets/set_fin.png';
import handleClickSetting from '../handle/hspare/hsetting.jsx'
import { useState, useEffect } from 'react';


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
            <img className='set' src={setting} alt='set' onClick={handleClickSetting} />
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
            <img className='set' src={setting} alt='set' onClick={handleClickSetting} />
          </div>
        </div>
      );
    }
    else {
      return <div>Page not found</div>;
    }
  }

export default createStepsAdd;