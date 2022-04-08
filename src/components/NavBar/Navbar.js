import React, { Component } from 'react'
import { MenuItems } from './../MenuItems'
import navlogo from './../../images/navlogo.png'
import Button from './../Button'
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";




class NavBar extends Component {
  state = {clicked:false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }


    render(){
        return(
            <nav className="NavbarItems">
              <a href='https://www.tikojar.com' className='homelink'><h1 className='navbar-logo'><img src={navlogo} alt='tiko logo'aria-hidden="true" className='nav-logo'/>&nbsp;TikoJar</h1></a>
                <div className='menu-icon' onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {MenuItems.map((item, index) =>{
                    return(
                      <li key={index}>
                        <a className={item.cName} href={item.url} onClick={this.handleClick}>
                          {item.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <a href='https://discord.com/api/oauth2/authorize?client_id=958877976995446784&permissions=285749795904&scope=bot%20applications.commands'>
                  <Button buttonSize='btn--medium'>
                    <i class="fa-brands fa-discord fa-fw" aria-hidden="true" />
                      &nbsp;
                        Add TikoJar!
                  </Button>
                  </a>
            </nav>
        )
    }
}
export default NavBar;