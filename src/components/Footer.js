import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: black;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 3px solid rgb(15, 15, 15);
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 89%,
    rgba(6, 46, 0, 1) 100%,
    rgba(9, 121, 10, 1) 100%
  );
`;

const FooterText = styled.p`
  color: white;
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  & > * {
    margin-left: 10px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 Servant Aurélien. Tous droits réservés.</FooterText>
      <SocialIcons>
        <a href="https://www.linkedin.com/in/aur%C3%A9lien-servant-a85218217/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aurel-Rio" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
