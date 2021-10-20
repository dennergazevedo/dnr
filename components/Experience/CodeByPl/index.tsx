import React from 'react';
import { Container, Title, Date, DescribeContainer } from '../Common/styles';
import { BiRightArrow } from 'react-icons/bi';

const CodeBy: React.FC = () => {
  return (
    <Container animate={{ translateY: 8, opacity: 1 }} transition={{duration: 0.1}}>
      <Title>
        Frontend Developer Pleno
        <a href="https://www.codeby.com.br/" target="_blank" rel="noreferrer">@CodeBy</a>
      </Title>
      <Date>Mai 2021 - Jul 2021</Date>
      <DescribeContainer>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Desenvolvimento e manutenção de componentes para projetos de e-commerces 
            usando como ferramenta o ReactJS, NodeJS, HTML5 e CSS3 para construção 
            na plataforma VTEX IO.
          </span>
        </div>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Criação e manutenção de apps plug-in-play usando ReactJS, Typescript e NodeJS para 
            a plataforma VTEX IO.
          </span>
        </div>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Implementação de metodologias ágeis com a ferramenta Monday e participação mais ativa 
            em reuniões com clientes.
          </span>
        </div>
      </DescribeContainer>
    </Container>
  );
}

export default CodeBy;