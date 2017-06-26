import React, { Component } from 'react'
import { Nav, Navbar, NavItem} from 'react-bootstrap'

export default class Menu extends Component{
  render(){
    return(
        <Navbar collapseOnSelect inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>SaluD/Os</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

          <Nav>
            <NavItem eventKey={1} href='#' >About Us</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href='#' >Login</NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
  }
}
