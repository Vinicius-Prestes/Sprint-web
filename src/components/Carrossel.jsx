import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
  padding-top: 10px;
`;

const Carousel = () => {
  return (
    <CarouselContainer>
      {/* Estrutura do carrossel */}
      <img src='src/assets/imagens/carrossel_img1.jpg' alt="Carrossel 1" />
      <img src='src/assets/imagens/carrossel_img2.jpg' alt="Carrossel 2" />
    </CarouselContainer>
  );
};

export default Carousel