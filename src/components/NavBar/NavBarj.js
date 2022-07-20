import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/"><button className='btn btn-outlined-primary'>Inicio</button></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/perro"><button className='btn btn-outlined-primary'>Perros</button></NavLink>
            <NavLink to="/categoria/gato"><button className='btn btn-outlined-primary'>Gatos</button></NavLink>
            <NavLink to="/categoria/wonejo"><button className='btn btn-outlined-primary'>Wonejos</button></NavLink>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart"><CartWidget/></Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;