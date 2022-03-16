import React from 'react';
import { Container, Title, Date, DescribeContainer } from '../Common/styles';
import { BiRightArrow } from 'react-icons/bi';

const HeringSr: React.FC= () => {
  return (
    <Container animate={{ translateY: 8, opacity: 1 }} transition={{duration: 0.1}}>
      <Title>
        Fullstack Developer Senior
        <a href="https://www.ciahering.com.br/" target="_blank" rel="noreferrer">@HeringSr</a>
      </Title>
      <Date>Jan 2022 - Atual</Date>
      <DescribeContainer>
        <div>
          <BiRightArrow className="icon" size={10} />
          <span>
            Desenvolvimento e manutenção de componentes para projetos de e-commerces 
            usando como ferramenta o ReactJS, NodeJS, Typescript, HTML5 e CSS3 para construção 
            na plataforma VTEX CMS e VTEX IO.
          </span>
        </div>
        <div>
          <BiRightArrow className="icon" size={10} />
          <span>
            Criação e manutenção de apps plug-in-play usando ReactJS, Typescript e NodeJS para 
            a plataforma VTEX IO.
          </span>
        </div>
        <div>
          <BiRightArrow className="icon" size={10} />
          <span>
            Responsável pela gestão de pessoas e projetos, responsável por coordenar equipes, organizar atividades e 
            alinhamento de expectativas com os parceiros e com o time de Desenvolvedores.
          </span>
        </div>
      </DescribeContainer>
    </Container>
  );
}

export default HeringSr;