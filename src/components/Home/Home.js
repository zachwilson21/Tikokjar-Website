import React, { Component } from 'react'
import logo from '../../images/logo.png'
import './Home.css'
import Button from '../Button'




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
                        <Button>
                            <i class="fa-brands fa-discord fa-fw" aria-hidden="true" />
                            &nbsp;
                            Add TikoJar!
                        </Button>
                    </div>
                    </div>

            </div>

          )
      }
  }
  export default Home;