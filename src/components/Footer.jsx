import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-image: linear-gradient(#BA0000, #EF0C0C);
  text-align: center;
  padding: 20px 10px;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 30px;
`;

const FooterLinks = styled.div`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="footer-content">
      <div className="links-sociais">
        {/* Links das redes sociais */}
      </div>
      <FooterLinks>
        <a href="/about">Sobre</a>
        <a href="/privacy">Política de Privacidade</a>
      </FooterLinks>
      <p>&copy; 2024 Formula E. Todos os direitos reservados.</p>
    </div>
  </FooterContainer>
);

export default Footer