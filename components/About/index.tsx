/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, TitleContainer, Left, Right } from './styles';

const Resume: React.FC = () => {
  return (
    <Container>
      <Left>
        <TitleContainer>
          <span>01.</span>
          <h3>About me</h3>
          <div className="separator"/>
        </TitleContainer>
      </Left>
      <Right>
        
      </Right>
    </Container>
  );
}

export default Resume;