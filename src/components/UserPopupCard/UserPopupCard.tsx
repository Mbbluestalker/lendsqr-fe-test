import React from 'react'
import './UserPopupCard.scss'
import ViewDetails from '../../assets/view_details.svg'
import BlackListUser from '../../assets/blacklist_user.svg'
import ActivateUser from '../../assets/actvate_user.svg'

export const UserPopupCard = () => {
  return (
    <div className='userpopup-container'>
        <div className="userpopup-links">
            <img src={ViewDetails} alt="" />
            <p>View Details</p>
        </div>
        <div className="userpopup-links">
            <img src={BlackListUser} alt="" />
            <p>Blacklist User</p>
        </div>
        <div className="userpopup-links">
            <img src={ActivateUser} alt="" />
            <p>Activate User</p>
        </div>
    </div>
  )
}

