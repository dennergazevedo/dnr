import React from 'react';
import { Container, Title, Date, DescribeContainer } from '../Common/styles';
import { BiRightArrow } from 'react-icons/bi';

const ArtCopias: React.FC = () => {
  return (
    <Container animate={{ translateY: 8, opacity: 1 }} transition={{duration: 0.1}}>
      <Title>
        Desenvolvedor Fullstack
        <a href="https://www.instagram.com/artcopiasjm/" target="_blank" rel="noreferrer">@ArtCopias</a>
      </Title>
      <Date>Jan 2020 - Jan 2021</Date>
      <DescribeContainer>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Desenvolvimento de sistema de vendas para controle interno dos pedidos usando NodeJS, 
            Typescript e Express para fazer o Backend da aplicação e ReactTS para o frontend.
          </span>
        </div>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Criação de app em ReactNative para controle dos clientes sobre os pedidos realizados no sistema 
            usando o mesmo Backend.
          </span>
        </div>
      </DescribeContainer>
    </Container>
  );
}

export default ArtCopias;