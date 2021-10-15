/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaRegHandScissors } from 'react-icons/fa';
import { Container } from './styles';

const Resume: React.FC = () => {
  return (
    <Container>
      <h3>Hey you <FaRegHandScissors className="icon" />, I'm</h3>
      <h1>Denner Azevedo.</h1>
      <h2>Javascript enthusiast.</h2>
      <p>
        I'm a web developer and currently I work developing e-commerce, 
        building and supporting frontends, apps, integrations and so on. 
        I’m currently focus on studying ReactJS, ReactNative and NodeJs.
      </p>
    </Container>
  );
}

export default Resume;