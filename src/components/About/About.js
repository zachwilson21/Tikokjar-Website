import React, { Component } from 'react';
import './About.css';
import zach from './../../images/Zach.png';
import nathan from './../../images/nathan.png';
import matthew from './../../images/matthew.png';
import joel from './../../images/joel.png';




class About extends Component {
      render(){
          return(
            <div className='about'>
                <div id='About-Section' className='scrollbar-About' />
                <div className='about-main-header'>About</div>
                <div className='about-section'>
                      <div className='text'>
                          <div className='about-header'>Zach Wilson</div>
                          <div>Real standup guy. Once got a hole in one in minigolf. </div>
                          <div className='about-closing'>Let’s Fix that Together.</div>                   

                      </div>
                      <div className='about-images'><img src={zach} alt='discord logo' className='about-image'/></div>
                  </div>
                  <div className='about-section'>
                      <div className='about-mages'><img src={nathan} alt='calender'className='about-image'/></div>
                      <div className='about-text'>
                          <div className='about-header'>Nathan Wolf</div>
                          <div>You won't find anyone that databases as well as Nathan databases</div>
                      </div>
                  </div>
                  <div className='about-section'>
                      <div className='about-text'>
                          <div className='about-header'>Matthew Brown</div>
                          <div>This man uses 5 monitors at a time and thats just to keep up with all the help questions he gets from other students</div>
                      </div>
                      <div className='about-images'><img src={matthew} alt='notepad'className='about-image'/></div>
                  </div>
                  <div className='about-section'>
                      <div className='about-images'><img src={joel} alt='fireworks' className='about-image'/></div>
                      <div className='about-text'>
                          <div className='about-header'>Joel Santos</div>
                          <div>There's just too much to say about Joel</div>
                      </div>
                  </div>
              </div>
          )
      }
  }
  export default About;