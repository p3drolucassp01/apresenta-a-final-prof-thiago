import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Componente de navegação (Navbar).
 * Exibe a barra de navegação com links para as páginas principais e um menu suspenso.
 * @component
 * @returns {JSX.Element} A estrutura do componente Navbar.
 */
function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo e link para a página inicial */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={require('../assets/logo.png')}
            alt="Session Fit"
            style={{ height: '40px', width: 'auto' }}
          />
        </Navbar.Brand>

        {/* Botão de alternância para dispositivos móveis */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links principais de navegação */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Início</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
            <Nav.Link as={Link} to="/CalculoMMCDicas">Dicas</Nav.Link>
            <Nav.Link as={Link} to="/shopping">Nossa Loja</Nav.Link>
          </Nav>

          {/* Menu suspenso com links adicionais */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
              <Dropdown.Item as={Link} to="/EspacoClientePage">Espaço do Cliente</Dropdown.Item>
              <Dropdown.Item as={Link} to="/FranquadoPage">Seja um Franqueado</Dropdown.Item>
              <Dropdown.Item as={Link} to="/SustentabilidadePage">Sustentabilidade</Dropdown.Item>
              <Dropdown.Item as={Link} to="/NossaHistoriaPage">Nossa História</Dropdown.Item>
              <Dropdown.Item as={Link} to="/duvidas">Dúvidas Frequentes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
