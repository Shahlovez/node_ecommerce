import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-bootstrap";
import { NavLink, Route } from "react-router-dom";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src={process.env.PUBLIC_URL + "/techshop.png"}
                alt="logo"
                style={{ width: 150, marginTop: -18, marginBottom: -18 }}
              />
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({history}) => <SearchBox history={history} />}/>
            <Nav className='ms-auto nav-mobile'>
            {/* <Nav className="justify-content-end" style={{ width: "100%" }}> */}
              <NavLink to="/cart">
                <i className="fas fa-shopping-cart"></i>Cart
              </NavLink>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavLink to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </NavLink>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink to="/login">
                  <i className="fas fa-user"></i> Sign In
                </NavLink>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <NavLink to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </NavLink>
                  <NavLink to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </NavLink>
                  <NavLink to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
