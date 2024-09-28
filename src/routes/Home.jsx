import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <h2>Novidades</h2>
      <Carousel />
      <section>
        <h2 id="formula-e">Conhecendo a Formula E</h2>
        {/* Conteúdo sobre a Fórmula E */}
      </section>
    </div>
  );
};

export default Home