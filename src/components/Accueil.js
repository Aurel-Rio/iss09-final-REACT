import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  color: rgb(220, 220, 220);
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  color: rgb(220, 220, 220);
  margin-bottom: 20px;
`;

const Accueil = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    // Mettre à jour le titre de la page pour le référencement
    document.title = "ISS09 - Accueil";
    // Mettre à jour les balises meta pour le référencement
    const descriptionMeta = document.querySelector('meta[name="description"]');
    descriptionMeta.setAttribute(
      "content",
      "Bienvenue chez Informatique, Services, Saverdun !"
    );

    // Ajouter des liens internes
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    internalLinks.forEach((link) => {
      link.setAttribute("rel", "internal");
    });
  }, []);

  return (
    <Container className="custom-container" animate={animate}>
      <Title className="title">
        Bienvenue chez <bold>Informatique, Services, Saverdun</bold> !
      </Title>
      <ContactInfo>
        <Description>
          <span style={{ fontSize: "1.6em", textShadow: "1px 1px blue" }}>
            <strong><i>`Yann et Christine vous souhaitent la bienvenue !`</i></strong>
          </span>{" "}
          <span
            style={{
              fontSize: "1.2em",
              color: "white",
              textShadow: "1px 1px black",
            }}
          >
            <p>
              Situé en plein cœur de Saverdun dans le 09, notre boutique vous
              propose une large gamme de produits informatiques et de services.
            </p>
          </span>
          <p>
            <strong>
              &#33; Nous sommes ouverts du mardi au samedi, de 9h30 à 12h30 et
              de 14h à 19h00. &#33;
            </strong>
          </p>
          <p>
            N'hésitez pas à nous rendre visite et découvrez notre sélection de
            produits de qualité.
          </p>
        </Description>
      </ContactInfo>
    </Container>
  );
};

export default Accueil;
