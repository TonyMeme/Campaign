import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <header>
    <Navbar bg="success" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/home">យុទ្ធនាការ គូសខ្វែងសន្លឹកឆ្នោត</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/news"><i className="fas fa-newspaper"></i> News</Nav.Link>
            <Nav.Link href="/leaflets"><i className="fas fa-image"></i> Leaflets</Nav.Link>
            <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;