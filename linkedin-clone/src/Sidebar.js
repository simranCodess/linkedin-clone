import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice'; 
import "./Sidebar.css";

function Sidebar() {
    const user=useSelector(selectUser);



    const recentItem= (topic) => (
        <div className='sidebar__recent-item'>
            <span className='sidebar_hashtag'>#</span>
            <p>{topic}</p>
        </div>
    )



  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="background.avif" alt='' />
        <Avatar src="" className='sidebar__avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      

      <div className='sidebar__stats'>
        <div className='sidebar__stats-item'>
          <p>Who viewed you</p>
          <p className='sidebar__stats-item-value'>344</p>
        </div>
        <div className='sidebar__stats-item'>
          <p>Views on post</p>
          <p className='sidebar__stats-item-value'>123</p>
        </div>
      
      </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('Programming')}
        {recentItem('JavaScript')}
        {recentItem('ReactJs')}
        {recentItem('SoftwareEnginerring')}
      </div>
      </div>
    
  );
}

export default Sidebar;

