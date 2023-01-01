import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className='text-light'>DIPAK KUMAL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
          <Nav.Link href="#about" className='text-light'>About</Nav.Link>
          <Nav.Link href="#service" className='text-light'>Service</Nav.Link>
          <Nav.Link href="#contact" className='text-light'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header