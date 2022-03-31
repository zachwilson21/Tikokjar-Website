import React, { Component } from 'react'
import logo from './../../images/logo.png'
import './Home.css'
import Button from './../Button'




class Home extends Component {
      render(){
          return(

            <div className='home' >
                    <div className='logo'>
                        <img src={logo} width='350px'alt='tikojar logo'/>
                    </div>
                    <div className='text'>
                        <div> Is The Swear Jar Not<br/> Working Out?</div>
                        <div className='small-text'>On a positive note, <br/>TikoJar is here to fix that ;)</div>
                        <div className='button'>
                        <a href='https://discord.com/api/oauth2/authorize?client_id=958877976995446784&permissions=285749795904&scope=bot%20applications.commands'>
                            <Button className='add-button'>
                                <i class="fa-brands fa-discord fa-fw" aria-hidden="true" />
                                &nbsp;
                                Add TikoJar!
                            </Button>
                        </a>
                    </div>
                    </div>

            </div>

          )
      }
  }
  export default Home;