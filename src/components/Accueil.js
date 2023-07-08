import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  text-align: center;
  animation: ${({ animate }) => (animate ? fadeIn : 'none')} 1s ease-in;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  color: rgb(220, 220, 220);
  margin-bottom: 20px;
`;

const Accueil = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container className="custom-container" animate={animate}>
      <Title className="title">Bienvenue chez Informatique, Services, Saverdun !</Title>
      <ContactInfo>
        <p>Informatique, Services, Saverdun</p>
        <p>Situé en plein coeur de Saverdun dans le 09</p>
        <p>Vous pouvez nous contacter</p>
        <p>Du mardi au Samedi De 9h30 à 12h30 et de 14h à 19h00</p>
        <p>Par Mail : iss09@free.fr</p>
        <p>Au téléphone : 06 51 09 26 11</p>
      </ContactInfo>
    </Container>
  );
};

export default Accueil;