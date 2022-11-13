import React from 'react';
import './NavBar.scss';
import Logo from '../../assets/logo.svg';
import BellIcon from '../../assets/bell_icon.svg';
import ProfileImg from '../../assets/profile_img.svg';
import ArrowDown from '../../assets/arrowdown.svg';
import SearchIcon from '../../assets/search_icon.svg';



export const NavBar = () => {

  return (
    <div className='nav-container'>
      <div className='nav-logo'>
        <img src={Logo} alt="" />
      </div>

      <div className='nav-search'>
        <input type="text" placeholder='Search for anything' />
        <button>
          <img src={SearchIcon} alt="" />
        </button>
      </div>

      <div className="nav-right">
        <a href="#">Docs</a>
        <img src={BellIcon} alt="" />
        <img className='profile-img' src={ProfileImg} alt="" />

        <div className="profile-link">
          <a href="#">Adedeji</a>
          <img src={ArrowDown} alt="" />

        </div>

      </div>
    </div>
  )
}

