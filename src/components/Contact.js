import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% {
    color: #fff;
  }
  50% {
    color: #c0f9d4;
  }
  100% {
    color: #fff;
  }
`;

const Container = styled.div`
  text-align: center;
  width: 70%;
  height: 100%;
  margin-top: 30vh;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 60px;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  width: 80%;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const BlinkingAddress = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  animation: ${blinkAnimation} 2s linear infinite;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContactInfo = styled.div`
  font-size: 16px;
  color: rgb(220, 220, 220);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 55px;
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
`;

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact - ISS09 Informatiques saverdun';
  }, []);

  return (
    <Container className="custom-container">
      <Heading className="title">Contact</Heading>
      <BlinkingAddress>Adresse : <span>8 r Lion D'Or, 09700 Saverdun</span></BlinkingAddress>
      <ContactInfo>
        <p>
          Par Mail : <a href="mailto:iss09@free.fr" style={{ color: '#990000', textDecoration: 'none' }}>iss09@free.fr</a>
        </p>
        <p>
          Au téléphone : <a href="tel:+33651092611" style={{ color: '#006600', textDecoration: 'none' }}>06 51 09 26 11</a>
        </p>
      </ContactInfo>
      <MapContainer>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7623341363687!2d1.5730072154842643!3d43.235442379137886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aee14e1cce7f8b%3A0xfcd49e3f5b7e0778!2sISS09!5e0!3m2!1sfr!2sfr!4v1626419896001!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></Map>
      </MapContainer>
    </Container>
  );
};

export default Contact;
