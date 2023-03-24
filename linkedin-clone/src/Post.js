import { InputOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, {forwardRef} from 'react';
import InputOptions from './InputOptions';
import "./Post.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name, description, messages, photourl}, ref) => {
   
    return (
      <div ref={ref} className='post'>
          <div className='post__header'>
        <Avatar src={photourl} >{name[0]}</Avatar>
        <div className='post-info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        </div>
        <div className='post__body'>
          <p>{messages}</p>
        </div>
        <div className='post__button'>
          <InputOptions Icon={ThumbUpAltIcon} title="Like" color="" />
          <InputOptions Icon={CommentIcon} title="Comment" color="" />
          <InputOptions Icon={ShareIcon} title="Share" color="" />
          <InputOptions Icon={SendIcon} title="Send" color="" />
        </div>
      </div>
    );
  });
  
  export default Post;
  
