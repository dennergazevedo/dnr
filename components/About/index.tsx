/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, TitleContainer, Left, Right, Paragraph, TechContainer, Tech, ImageContainer } from './styles';
import { BiRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import Me from './me.jpeg';

const Resume: React.FC = () => {
  return (
    <Container id="about">
      <Left>
        <TitleContainer>
          <span>01.</span>
          <h3>About me</h3>
          <div className="separator"/>
        </TitleContainer>
        <Paragraph>
          <p>
            Olá! Meu nome é Denner Azevedo e me divirto criando coisas para internet.
            Meu interesse pelo desenvolvimento começou em 2015 quando comecei a construir alguns 
            algoritmos em C e Java para tarefas da faculdade. Mas me encontrei realmente no 
            desenvolvimento web em 2018 quando me ofereci para desenvolver o e-commerce e sistemas 
            de vendas de uma gráfica — onde eu trabalhava de Designer Gráfico.
          </p>
          <p>
            Avançando até hoje, tive o privilégio de trabalhar em uma start-up voltada para e-commerces. 
            Parte do meu trabalho é construir soluções para e-commerces - às vezes construir o site do zero. 
            Também sou Dev Lead em um squad onde ajudo na distribuição de tarefas e entender a dor de cada parceiro.
          </p>
          <p>
            Aqui estão algumas tecnologias que estou trabalhando atualmente:
          </p>
        </Paragraph>
        <TechContainer>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>JavaScript (ES6+)</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>TypeScript</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>ReactJS</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>NodeJS</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>JQuery</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>VTEX CMS</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>VTEX IO</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={14} />
            <span>Shopify</span>
          </Tech>
        </TechContainer>
      </Left>
      <Right>
        <ImageContainer>
          <div className="colorFilter" />
          <Image className="image" src={Me} alt="Denner Azevedo Photo"/>
        </ImageContainer>
      </Right>
    </Container>
  );
}

export default Resume;