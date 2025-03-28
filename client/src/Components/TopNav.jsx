import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";
const TopNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id='navbar'>
      <Container>
        <Navbar.Brand as={Link} to="home">PhotoUploader</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="login">
            <span style={{
              fontSize:'22px',
              color:'#000'
            }}>
            <FaUserPlus />
            </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default TopNav
