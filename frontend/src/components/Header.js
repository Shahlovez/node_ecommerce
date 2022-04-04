import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
 <Navbar bg="light" expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand> 
    <a href="/"><img src='techshop.png' style={{width:110, marginTop:-18, marginBottom:-28}} /></a>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
        <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header