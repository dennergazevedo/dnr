import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { Container, Line, Left, Right } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
        <Left>
          <a href="https://github.com/dennergazevedo" target="_blank" rel="noreferrer">
            <FiGithub className="icon" size={20}/>
          </a>
          <a href="https://www.linkedin.com/in/dennergazevedo/" target="_blank" rel="noreferrer">
            <FiLinkedin className="icon"size={20}/>
          </a>
          <a href="https://www.instagram.com/dennergazevedo/" target="_blank" rel="noreferrer">
            <FiInstagram className="icon"size={20}/>
          </a>
          <a href="https://www.facebook.com/denner.azevedo.92/" target="_blank" rel="noreferrer">
            <FiFacebook className="icon"size={20}/>
          </a>
          <Line />
        </Left>
        <Right>
          <a href="mailto:dennergazevedo@gmail.com">
            dennergazevedo@gmail.com
          </a>
          <Line />
        </Right>
      </Container>
  );
}

export default Footer;