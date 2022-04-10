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
                <div className='about-main-header'>About<div className='about-sub'>TikoJar is a team project, serviced by the members below for the 2022 Spring Semester at the <br/> State University of New York at Oswego</div></div>
                <div className='about-section'>
                      <div className='about-text'>
                          <div className='about-header'>Zach Wilson</div>
                          <div></div>
                          <div className='about-closing'>
                              <a href='https://www.linkedin.com/in/zach-wilson-b202a08b/' target="_blank">
                                  <i class="fa-brands fa-linkedin"></i>
                                  </a>
                              <a href='https://github.com/zachwilson21' target="_blank">
                                  <i class="fa-brands fa-github"></i>
                              </a>
                          </div>                   

                      </div>
                      <div className='about-images'><img src={zach} alt='discord logo' className='about-image'/></div>
                  </div>
                  <div className='about-section'>
                      <div className='about-images'><img src={nathan} alt='calender'className='about-image'/></div>
                      <div className='about-text'>
                          <div className='about-header'>Nathan Wolf</div>
                          <div></div>
                          <div className='about-closing'>
                              <a href='https://www.linkedin.com/in/nwolf2' target="_blank">
                                  <i class="fa-brands fa-linkedin"></i>
                                  </a>
                              <a href='https://github.com/NULLWulf' target="_blank">
                                  <i class="fa-brands fa-github"></i>
                              </a>
                          </div> 
                      </div>
                  </div>
                  <div className='about-section'>
                      <div className='about-text'>
                          <div className='about-header'>Matthew Brown</div>
                          <div></div>
                          <div className='about-closing'>
                              <a href='https://www.linkedin.com/in/matthew-brown-054998211/' target="_blank">
                                  <i class="fa-brands fa-linkedin"></i>
                                  </a>
                              <a href='https://github.com/MatthewDBrown50' target="_blank">
                                  <i class="fa-brands fa-github"></i>
                              </a>
                          </div> 
                      </div>
                      <div className='about-images'><img src={matthew} alt='notepad'className='about-image'/></div>
                  </div>
                  <div className='about-section'>
                      <div className='about-images'><img src={joel} alt='fireworks' className='about-image'/></div>
                      <div className='about-text'>
                          <div className='about-header'>Joel Santos</div>
                          <div></div>
                          <div className='about-closing'>
                              <a href='www.linkedin.com/in/joelsantosh' target="_blank">
                                  <i class="fa-brands fa-linkedin"></i>
                                  </a>
                              <a href='https://github.com/HaiyoreN' target="_blank">
                                  <i class="fa-brands fa-github"></i>
                                  </a>
                              <a href='https://www.twitch.tv/JSHaiyoreN' target="_blank">
                                  <i class="fa-brands fa-twitch"></i>
                              </a>
                          </div> 
                      </div>
                  </div>
              </div>
          )
      }
  }
  export default About;