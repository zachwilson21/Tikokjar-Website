import React, { Component } from 'react'
import logo from '../../images/logo.png'




class Home extends Component {
      render(){
          return(

            <div className='logo-text' >
                    <div>
                        <img src={logo} className='logo'/>
                    </div>
                    <div>
                        <p> Is the swear jar not working out?</p>
                    </div>
            </div>

          )
      }
  }
  export default Home;