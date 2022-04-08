import React, { Component } from 'react'
import calender from './../../images/calender2.png'
import discord from './../../images/discord.png'
import fireworks from './../../images/fireworks2.png'
import pencil from './../../images/pencil.png'
import bg from './../../images/seeitbg.svg'
import './SeeIt.css'

class SeeIt extends Component {
      render(){
          return(
              <div className='see-it'>
                  <div id='SeeIt' className='scrollbar-seeit' />
                  <div className='see-it-section-light'>
                      <div className='text'>
                          <div className='header'>Let's Learn Some Greek</div>
                          <div className='sub-header'>θετῐκός • thetikótita                 What’s it mean? </div>
                          <div>Positivity. This is the root of our discord bot. Invite TikoJar to your server to bring your community closer together. It’s easy to forget where those positive vibes from last week came from, or even yesterday. </div>
                          <div className='closing'>Let’s Fix that Together.</div>                   

                      </div>
                      <div className='images'><img src={discord} alt='discord logo' className='individual-image'/></div>
                  </div>
                  <div className='see-it-section'>
                      <div className='images'><img src={calender} alt='calender'className='individual-image-dark'/></div>
                      <div className='text'>
                          <div className='header'>Create Your Jar</div>
                          <div>Once TikoJar has been added  to your server, the server owner will create a jar! You will give it a time limit, or message limit for when you’d like the jar to be opened and all the positive vibes released!</div>
                      </div>
                  </div>
                  <div className='see-it-section-light'>
                      <div className='text'>
                          <div className='header'>Add Or Remove Positive Notes!</div>
                          <div>Each user gets to add their own, personal notes to the jar that they’d like to be share at a later time! Accidentaly add something but change your mind? ask TikoBot to remove it for you!</div>
                      </div>
                      <div className='images'><img src={pencil} alt='notepad'className='individual-image'/></div>
                  </div>
                  <div className='see-it-section'>
                      <div className='images'><img src={fireworks} alt='fireworks' className='individual-image-dark'/></div>
                      <div className='text'>
                          <div className='header'>Opening Ceremony!</div>
                          <div>It’s finally time! You’ve maxed out the jar’s  message limit or reached the opening date. All of those awesome memories your community added to the jar will now be released for everyone to enjoy and reminisce! </div>
                      </div>
                  </div>
              </div>
          )
      }
  }
  export default SeeIt;