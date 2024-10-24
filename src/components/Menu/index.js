import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BasicNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Filmes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Sobre" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/site">Site</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">about me</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Gêneros" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/acao">Ação</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/drama">Drama</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/comedia">Comédia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/romance">Romance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/terror">Terror</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/outros">Outros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" inline>
            <FormControl
              type="search"
              placeholder="Buscar filmes"
              className="me-2"
              aria-label="Buscar filmes"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicNavbar;
