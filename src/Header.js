import React from 'react'
import './Header.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
              <img className="header__img"
              src="https://s3-ap-southeast-1.amazonaws.com/internshala-uploads/google_logo/5f195133ee39e1595494707.png" />
            </div>
            <div className="header__middle">
                <Button>
                <NotificationsIcon  />
                </Button>
            </div>
            <div className="header__right">
                <h1>John Doe</h1>
                <img src="https://image.shutterstock.com/image-vector/cute-angry-monster-on-yellow-600w-1020286750.jpg" />
            </div>
           
        </div>
        
    )
}

export default Header
