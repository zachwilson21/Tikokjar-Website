import React, { Component } from 'react'
import { MenuItems } from '../MenuItems'
import navlogo from '../../images/navlogo.png'
import Button from '../Button'
import './Navbar.css'




class NavBar extends Component {
  state = {clicked:false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }


    render(){
        return(
            <nav className="NavbarItems">
              <h1 className='navbar-logo'><img src={navlogo} alt='tiko logo'aria-hidden="true" className='nav-logo'/>&nbsp;TikoJar</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {MenuItems.map((item, index) =>{
                    return(
                      <li key={index}>
                        <a className={item.cName} href={item.url}>
                          {item.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                  <Button className='add-button'>
                    <i class="fa-brands fa-discord fa-fw" aria-hidden="true" />
                      &nbsp;
                        Add TikoJar!
                  </Button>
            </nav>
        )
    }
}
export default NavBar;