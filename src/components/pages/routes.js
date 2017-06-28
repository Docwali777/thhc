import React, { Component } from 'react'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import { Nav, Navbar, NavItem} from 'react-bootstrap'
import App from './app'
import About from './about'

class ReactRoutes extends Component{
render(){
  return(
    <Router>
    <div>
      <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/' href="#">SaluD/Os </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem><Link to='/' >Home</Link></NavItem>
<NavItem><Link to='/about' >About</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <Route exact path='/' component={App} />
    <Route path='/about' component={About} />
    </div>
    </Router>
  )
}
}

export default ReactRoutes
