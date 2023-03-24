import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import './Header.css';
import HeaderOptions from './HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './userSlice';
import { auth } from './firebase';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    const user=useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='Header'>
      <div className='Header_left'>
        <img src="linkedin.png" alt="" />
        <div className='Header_search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
       
      <div className='Header_right'>
        <HeaderOptions Icon={HomeIcon} title="Home"/>
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOptions Icon={MessageIcon} title="Messaging"/>
        <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOptions className= "pic" avatar={PersonIcon} title={"Me"} onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
