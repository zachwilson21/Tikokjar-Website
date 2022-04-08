import React, { Component } from 'react'
import './Commands.css'
import add from './../../images/add.jpg';
import createm from './../../images/create m.jpg';
import createt from './../../images/create t.jpg';
import deletejar from './../../images/delete jar.jpg';
import deletemessage from './../../images/delete message.jpg';
import hello from './../../images/hello.jpg';
import help from './../../images/help.jpg';
import viewmessages from './../../images/view messages.jpg';


class Commands extends Component {
      render(){
          return(
            <div className='commands'>
                <div id='Commands-Section' className='scrollbar-command'/>
                <div className='commands-header'>TikoJar Commands</div>
                <div className='Header'>Add Messages To The Jar</div>
                <img src={add} alt='tikoadd' className='image'/>
                <div className='Header'>Create A Jar With A Message Limit</div>
                <img src={createm} alt='createm' className='image'/>
                <div className='Header'>Create A Jar With a Time Limit</div>
                <img src={createt} alt='createt' className='image'/>
                <div className='Header'>Delete Your Server's Jar</div>
                <img src={deletejar} alt='deletejar' className='image'/>
                <div className='Header'>Delete A Message</div>
                <img src={deletemessage} alt='deletemsg' className='image'/>
                <div className='Header'>Hello</div>
                <img src={hello} alt='hello' className='image'/>
                <div className='Header'>Get Help</div>
                <img src={help} alt='help' className='image'/>
                <div className='Header'>View Messages</div>
                <img src={viewmessages} alt='viewmsg' className='image'/>
            </div>
          )
      }
  }
  export default Commands;