import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
 <Navbar bg="light" expand="lg" collapseOnSelect>
  <Container>
{/* <LinkContainer to='/'> */}

{/* <Nav.Link as={Link} to="/path">children</Nav.Link> */}
    <Navbar.Brand>
     <a href="/"><img src='techshop.png' alt='logo' style={{width:110, marginTop:-18, marginBottom:-28}} /></a> 
    </Navbar.Brand>
   {/* </LinkContainer> */}

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-end" style={{ width: "100%" }}>
    {/* <LinkContainer to='/cart'> */}
        <Nav.Link>
        <i className='fas fa-shopping-cart'></i>Cart
        </Nav.Link>
      {/* </LinkContainer> */}
      {/* <LinkContainer to='/login'> */}
        <Nav.Link>
        <i className='fas fa-user'></i>Sign In
        </Nav.Link>
        {/* </LinkContainer> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header