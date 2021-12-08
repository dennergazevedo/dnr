/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from './styles';

const Resume: React.FC = () => {
  return (
    <Container id="technology">
      <div className="slider">
        <div className="container">
          <div className="slide x"></div>
          <div className="slide y"></div>
          <div className="slide z"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </Container>
  );
}

export default Resume;