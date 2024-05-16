import profile from '../../assets/prof_fin1.png';
import setting from '../../assets/menu_fin.png' ;
import handleClickMenu from '../handle/hspare/hmenu.jsx'
import handleClickProfile from '../handle/hspare/hprofile.jsx'
import { useState, useEffect } from 'react';

function createStepsMenu(){
    
    return (
      <div className='right1'>
        <div className='menu1'>
          <img className='menu' src={setting} alt='menu' onClick={handleClickMenu} />
        </div>
        <div className='em' />
        <div className='prof1'>
          <img className='prof' src={profile} alt='prof' onClick={handleClickProfile} />
          <div className='admins'>
            <div className='adname'>Admin Name</div>
            <div className='adid'>Admin ID</div>
          </div>
        </div>
      </div>
    );
  }

  export default createStepsMenu;