/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Left, Right, Paragraph, TechContainer, Tech, ImageContainer } from './styles';
import { Container, TitleContainer } from '../Common/styles';
import { BiRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import Me from './me.jpeg';

const Resume: React.FC = () => {
  return (
    <Container id="about">
      <Left>
        <TitleContainer>
          <span>01.</span>
          <h3>Sobre mim</h3>
          <div className="separator"/>
        </TitleContainer>
        <Paragraph>
          <p>
            Olá! Meu nome é Denner Azevedo e me divirto criando coisas para internet.
            Meu interesse pelo desenvolvimento começou em 2015 quando comecei a construir alguns 
            algoritmos em C e Java na faculdade. Mas me encontrei realmente no 
            desenvolvimento web em 2018 quando me ofereci para desenvolver o e-commerce e sistemas 
            de vendas de uma gráfica — onde eu trabalhava de Designer Gráfico.
          </p>
          <p>
            Buscando crescimento tive o privilégio de trabalhar em uma start-up voltada para e-commerces. 
            Parte do meu trabalho era construir soluções para e-commerces. 
            Tive também o privilégio de ser Tech Lead em duas empresas diferentes onde pude agregar com 
            todo conhecimento que consegui adquirir durante esses anos.
          </p>
          <p>
            Atualmente tenho me encontrado mais no desenvolvimento Backend onde minha experiência é com NodeJS mas 
            tenho me aventurado no Python para desenvolvimento Web com o Django.
          </p>
          <p>
            Aqui estão algumas tecnologias que estou trabalhando atualmente:
          </p>
        </Paragraph>
        <TechContainer>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>JavaScript (ES6+)</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>TypeScript</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>ReactJS</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>NextJS</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>Gatsby</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>NodeJS</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>Python</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>Django Rest</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>JQuery</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>VTEX CMS</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>VTEX IO</span>
          </Tech>
          <Tech>
            <BiRightArrow className="tech-icon" size={10} />
            <span>Shopify</span>
          </Tech>
        </TechContainer>
      </Left>
      <Right>
        <ImageContainer>
          <div className="colorFilter" />
          <Image className="image" src={Me} alt="Denner Azevedo Photo"/>
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
        </ImageContainer>
      </Right>
    </Container>
  );
}

export default Resume;