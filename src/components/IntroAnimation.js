import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../assets/logo.png';

const initialRotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg) scale(0.6);
  }
  30% {
    transform: rotateY(360deg) scale(1.2);
  }
  100% {
    transform: rotateY(360deg) scale(1);
  }
`;

const lineAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    background-color: white;
  }
  50% {
    transform: translateX(0%);
    background-color: white;
  }
  100% {
    transform: translateX(0%);
    background-color: green;
  }
`;

const lineAnimationBottom = keyframes`
  0% {
    transform: translateX(100%);
    background-color: white;
  }
  50% {
    transform: translateX(0%);
    background-color: white;
  }
  100% {
    transform: translateX(0%);
    background-color: green;
  }
`;

const AnimationContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  perspective: 1000px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${initialRotateAnimation} 2s ease-in-out forwards;
  transform-origin: center center;
  image-rendering: auto;
`;

const LineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: white;
  animation: ${({ animate }) => (animate ? lineAnimation : 'none')} 1.5s linear forwards;
`;

const TopLine = styled(Line)`
  top: 55px;
  left: 0;
`;

const BottomLine = styled(Line)`
  bottom: 55px;
  right: 0;
  animation: ${({ animate }) => (animate ? lineAnimationBottom : 'none')} 1.5s linear forwards;
`;

const Content = styled.div`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 1s ease;
`;
const IntroAnimation = ({ onAnimationComplete }) => {
  const [animateLines, setAnimateLines] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const animationDuration = 2000;

    const timer1 = setTimeout(() => {
      setAnimateLines(false);
    }, animationDuration);

    const timer2 = setTimeout(() => {
      setShowContent(true);
      if (typeof onAnimationComplete === 'function') {
        onAnimationComplete();
      }
    }, animationDuration + 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimationContainer>
      <LogoContainer>
        <Logo src={logo} alt="iss09" />
      </LogoContainer>
      <LineContainer>
        <TopLine animate={animateLines ? "true" : "false"} />
        <BottomLine animate={animateLines ? "true" : "false"} />
      </LineContainer>
      <Content visible={showContent ? "true" : "false"}>
        {/* Contenu du site ici */}
      </Content>
    </AnimationContainer>
  );
};

export default IntroAnimation;