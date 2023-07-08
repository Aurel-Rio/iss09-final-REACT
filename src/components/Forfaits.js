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

const Forfaits = () => {
  return (
    <Container  className="custom-container">
      <Title className='title'>Forfaits</Title>
      <Price>Forfait Correctif : 45€ en atelier</Price>
      <Description>
        Blocage intégral des Publicités intempestives
        Nettoyage complet de votre système, Suppression des logiciels inutiles, Désinfection de virus
        Correction de vos drivers (carte mère, carte graphique, imprimante …)
        Optimisation, accélération de votre système, remplacement des logiciels obsolètes
      </Description>
      <Price>Forfait nouvelle installation ou réinstallation : 75€ en atelier</Price>
      <Description>
        Installation ou Réinstallation du Logiciel d’exploitation ( WINDOWS ou Linux ou Mac)
        Installation des drivers (carte mère, carte graphique, imprimante …)
        Mise à jour du système et de tous les logiciels utiles (java, antivirus, messagerie, dessin, vidéo, audio, …)
        Optimisation du système d’exploitation en fonction du matériel.
      </Description>
    </Container>
  );
};

export default Forfaits;