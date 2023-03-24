import { Avatar } from '@mui/material';
import React from 'react';
import "./HeaderOptions.css";
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function HeaderOptions({avatar, Icon, title, onClick}) {
    const user= useSelector(selectUser);
  return (
    <div className="HeaderOptions" onClick={onClick}>
      {Icon && <Icon className="HeaderOptions_icon" />}
      {avatar && (
        <Avatar className="HeaderOptions_icon" >
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="HeaderOptions_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;

