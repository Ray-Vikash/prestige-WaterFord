import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-0 mt-0 pt-0 pb-0 mr-0 ml-0"> 
        <div id="logo">
          <img id="logoImg" src={logo} alt="Logo" />
        </div>
        <Container className=" navBar-container">
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link id="navLinks" href="/about">
                About
              </Nav.Link>
              <Nav.Link id="navLinks" href="/residential">
                Residential
              </Nav.Link>
              <Nav.Link id="navLinks" href="/commercial">
                Commercial
              </Nav.Link>
              <Nav.Link id="navLinks" href="/rentals">
                Rentals
              </Nav.Link>
              <Nav.Link id="navLinks" href="/hospitality">
                Hospitality
              </Nav.Link>
              <Nav.Link id="navLinks" href="/retail">
                Retail
              </Nav.Link>
              <Nav.Link id="navLinks" href="/blog">
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
