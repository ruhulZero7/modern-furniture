import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo/logo.png";
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
            <Nav className="ms-auto item-cntainer">
              <Nav.Link as={Link} className="nav-item" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/all-products">
                All Products
              </Nav.Link>

              {user.email && (
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
              {user.email ? (
                <Nav.Link>
                  <button className="btn btn-warning" onClick={logOut}>
                    Logout
                  </button>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="btn btn-warning">Login</button>
                </Nav.Link>
              )}
              <span style={{ color: "white" }}>{user.displayName}</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
