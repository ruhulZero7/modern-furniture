import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navbar-main">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="nav-menu">
          <Nav.Link as={Link} className="logo" to="/home">
            <img src={logo} alt="" />
          </Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="nav-item" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/all-products">
                All Products
              </Nav.Link>

              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              {user.email ? (
                <button onClick={logOut}>Logout</button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button>Login</button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
