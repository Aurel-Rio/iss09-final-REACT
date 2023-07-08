import logo from '../assets/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Nav = styled.nav`
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 89%, rgba(6,46,0,1) 100%, rgba(9,121,10,1) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 3px solid rgb(15,15,15);
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  animation: ${({ animate }) => (animate ? animation : 'none')} 1s infinite alternate;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(135deg, rgba(33,255,0,1) 0%, rgb(6, 70, 7) 0%, rgba(0,0,0,1) 72%, rgba(2,0,36,1) 100%);
    transform: scaleX(${({ animate }) => (animate ? '1' : '0')});
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    background: linear-gradient(135deg, rgba(33,255,0,1) 0%, rgb(6, 70, 7) 0%, rgba(0,0,0,1) 72%, rgba(255,255,255,1) 100%); // Modifier la couleur de fond pour rendre les traits plus lumineux
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  &:hover {
    color: rgb(23, 101, 125);
  }
`;

const animation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Navbar = () => {
  const [animate, setAnimate] = useState(true); // Mettre à true par défaut

  const handleMouseEnter = () => {
    setAnimate(true);
  };

  const handleClick = () => {
    setAnimate(false);
    // Ajoutez ici le code pour redémarrer l'intro animée
  };

  return (
    <Nav>
      <Logo src={logo} alt="Logo" animate={animate} onMouseEnter={handleMouseEnter} onClick={handleClick} />
      <Ul>
        <Li animate={animate}>
          <StyledLink to="/">Accueil</StyledLink>
        </Li>
        <Li animate={animate}>
          <StyledLink to="/forfaits">Forfaits</StyledLink>
        </Li>
        <Li animate={animate}>
          <StyledLink to="/assistance">Assistance</StyledLink>
        </Li>
        <Li animate={animate}>
          <StyledLink to="/contact">Contact</StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;