import React from 'react';
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
  color:  	rgb(220,220,220);
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color:  	rgb(220,220,220);
  margin-bottom: 20px;
`;

const Assistance = () => {
  return (
    <Container className="custom-container">
      <Title className='title'>Assistance</Title>
      <Price>Conseils et accompagnement : sur RDV chez vous 30€ la première heure puis dégressif + déplacement</Price>
      <Description>
        Conseils au sujet du matériel informatique à choisir, correspondant à votre budget. Quel ordinateur, écran, imprimante, Web Cam etc…
      </Description>
      <Description>
        Réalisation d’un ordinateur personnalisé. Vous voulez une configuration personnalisée, un ordinateur spécifique à vos besoins. Nous évaluons avec vous vos besoins pour vous réaliser une configuration la plus adaptée.
      </Description>
      <Description>
        Réalisation d’un kit pour rajeunir votre ancien ordinateur. Nous étudions avec vous les améliorations et changements à effectuer : Carte Mère, Processeur, Carte graphique, Mémoire Alimentation etc… pour rajeunir votre ancien ordinateur.
      </Description>
    </Container>
  );
};

export default Assistance;