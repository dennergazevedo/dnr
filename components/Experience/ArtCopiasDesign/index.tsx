import React from 'react';
import { Container, Title, Date, DescribeContainer } from '../Common/styles';
import { BiRightArrow } from 'react-icons/bi';

const ArtCopias: React.FC = () => {
  return (
    <Container animate={{ translateX: 20, opacity: 1 }} transition={{duration: 0.1}}>
      <Title>
        Designer Gráfico
        <a href="https://www.instagram.com/artcopiasjm/" target="_blank" rel="noreferrer">@ArtCopias</a>
      </Title>
      <Date>Out 2017 - Jul 2019</Date>
      <DescribeContainer>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Desenvolvimento de artes gráficas para identidade visual de lojas como por exemplo logomarcas, placas industriais, 
            placas de identificação, folhetos, panfletos e cartões.
          </span>
        </div>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Atendimento presencial e online de clientes para criação de briefing.
          </span>
        </div>
      </DescribeContainer>
    </Container>
  );
}

export default ArtCopias;