import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  width: 70%;
  height:50%;
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  width:80%;
`;

const Address = styled.p`
  font-size: 16px;
  color:  	rgb(220,220,220);
  margin-bottom: 20px;
`;

const MapContainer = styled.div`
  width: 80%;
  height: 450px;
  margin: 0 auto;

`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  margin-bottom:55px;
  border-radius: 10px;
`;

const Contact = () => {
  return (
    <Container className="custom-container">
      <Heading className='title'>Contact</Heading>
      <Address>Adresse : 8 r Lion D'Or, 09700 Saverdun</Address>
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