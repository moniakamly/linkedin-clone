import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat'; 
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/128/174/174857.png"  alt="linkedin"/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4D35AQH4tXKFfESRwA/profile-framedphoto-shrink_100_100/0/1613494608179?e=1617181200&v=beta&t=NL1u05wlL1zGUVOrStIh-OXHtsvtRxHEpz1aGAahtwE" title="me" />
            </div>
        </div>
    )
}

export default Header
