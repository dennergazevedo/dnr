/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaRegHandScissors } from 'react-icons/fa';
import { Container } from './styles';

const Resume: React.FC = () => {
  return (
    <Container id="resume">
      <h3>Hello world! <FaRegHandScissors className="icon" /></h3>
      <h1>Denner Azevedo</h1>
      <h2 className="glitch" data-text="Javascript enthusiast">Javascript enthusiast</h2>
      <p>
        Sou Desenvolvedor Web especializado na stack Javascript com React e NodeJS,
        atualmente trabalho com construção e suporte de e-commerces e apps.
      </p>
      <p>
        Meu foco recentemente é o backend para desenvolvimento WEB, com as linguagens 
        Javascript e Python nos frameworks Express e Django Rest.
      </p>
    </Container>
  );
}

export default Resume;