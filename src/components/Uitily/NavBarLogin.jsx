import React from 'react'
import logo from '../../assets/image/logo.png'
import login from '../../assets/image/login.png'
import cart from '../../assets/image/cart.png'
import {Navbar ,Container ,FormControl , Nav} from 'react-bootstrap';
const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href='/'>
          <img src={logo} className='logo' alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <FormControl type='search' placeholder='Search' className='me-2 w-100 text-center'/>
          <Nav className='me-auto'>
            <Nav.Link href='login' className='nav-text d-flex mt-3 justify-content-center '>
              <img src={login} className='login-img me-1' alt=""  />
              <p style={{color:'white',marginTop:'1px'}}> Login</p>
            </Nav.Link>
            <Nav.Link href='cart' className='nav-text d-flex mt-3 justify-content-center'>
              <img src={cart} className='login-img me-1' alt=""  />
              <p style={{color:'white',marginTop:'1px'}}> Cart</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarLogin