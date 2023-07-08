import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png';

const Nav = styled.nav`
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 89%, rgba(6,46,0,1) 100%, rgba(9,121,10,1) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 3px solid rgb(15,15,15);
  height: 55px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: transform 0.3s ease-in-out;

  ${({ open }) => open && `
    transform: rotate(-45deg);
  `}

  &:nth-child(2) {
    ${({ open }) => open && `
      opacity: 0;
    `}
  }

  &:nth-child(3) {
    ${({ open }) => open && `
      transform: rotate(45deg);
    `}
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ open }) => (open ? 'rgba(0, 0, 0, 0.9)' : 'transparent')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
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
    background: linear-gradient(135deg, rgba(33,255,0,1) 0%, rgb(6, 70, 7) 0%, rgba(0,0,0,1) 72%, rgba(255,255,255,1) 100%);
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <Logo src={logo} alt="Logo" />
      <BurgerMenu onClick={handleBurgerClick}>
        <BurgerIcon open={open} />
        <BurgerIcon open={open} />
        <BurgerIcon open={open} />
      </BurgerMenu>
      <Ul open={open}>
        <Li animate={open.toString()}>
          <StyledLink to="/" onClick={handleBurgerClick}>Accueil</StyledLink>
        </Li>
        <Li animate={open.toString()}>
          <StyledLink to="/forfaits" onClick={handleBurgerClick}>Forfaits</StyledLink>
        </Li>
        <Li animate={open.toString()}>
          <StyledLink to="/assistance" onClick={handleBurgerClick}>Assistance</StyledLink>
        </Li>
        <Li animate={open.toString()}>
          <StyledLink to="/contact" onClick={handleBurgerClick}>Contact</StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;