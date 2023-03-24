import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const NewsArticle = ({ heading, subtitle }) => (
      <div className='news_article'>
        <div className='widgets_left'>
        <FiberManualRecordIcon />
        </div>
        <div className='widgets_right'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  
    return (
      <div className='widgets'>
        <div className='widget_header'>
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        
        <NewsArticle heading='Learn react with me' subtitle='9099 readers' />
        
        <NewsArticle heading='Learn Node js with me' subtitle='949 readers' />
      
        <NewsArticle heading='Tesla hits new highs' subtitle='543 readers' />
       
        <NewsArticle heading='is redux too good?' subtitle='24342 readers' />
       
        <NewsArticle heading='Learn react with me' subtitle='9099 readers' />
       
        <NewsArticle heading='Learn react with me' subtitle='9099 readers' />
     
        <NewsArticle heading='Learn react with me' subtitle='9099 readers' />
      
        <NewsArticle heading='Learn react with me' subtitle='9099 readers' />
      </div>
    );
  }
  
  export default Widgets;
  
