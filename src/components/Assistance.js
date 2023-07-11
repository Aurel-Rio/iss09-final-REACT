import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: grey;
  margin-bottom: 20px;
`;


const Assistance = () => {
  useEffect(() => {
    document.title = 'Assistance - ISS09 Informatiques saverdun';
  }, []);

  return (
    <Container className="custom-container">
      <Title className="title">Assistance</Title>
      <Price> 
        <span style={{ fontSize: "1.2em", textShadow: "1px 1px blue" }}>
          Conseils et accompagnement :
        </span> 
      </Price>     
      <Description>
        Sur RDV chez vous 30€ la première heure puis dégressif + déplacement.
        Nous vous fournissons des conseils au sujet du matériel informatique à choisir, correspondant à votre budget.
        Que ce soit pour choisir un ordinateur, un écran, une imprimante, une webcam, etc.
      </Description>
      <Description>
        Nous réalisons également des ordinateurs personnalisés. Si vous avez des besoins spécifiques, nous évaluons avec vous vos besoins pour vous proposer une configuration adaptée.
      </Description>
      <Description>
        Si vous souhaitez rajeunir votre ancien ordinateur, nous pouvons étudier avec vous les améliorations et les changements à effectuer, tels que la carte mère, le processeur, la carte graphique, la mémoire, l'alimentation, etc.
      </Description>
    </Container>
  );
};

export default Assistance;
