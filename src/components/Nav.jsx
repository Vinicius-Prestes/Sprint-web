import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-image: linear-gradient(#EF0C0C, #BA0000);
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--bg-color1);
  margin: 4px 0;
`;

const Menu = styled.div`
  display: flex;
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
`;

const NavRight = styled.div`
  a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
  }
`;

const Navbar = () => (
  <Nav>
    <HamburgerMenu>
      <Bar />
      <Bar />
      <Bar />
    </HamburgerMenu>
    <Menu>
      <Link to="/">Formula E</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </Menu>
    <NavRight>
      <Link to="/login">Entrar</Link>
      <Link to="/signup">Criar Conta</Link>
    </NavRight>
  </Nav>
);

export default Navbar;