import React from 'react';
import { Container, Title, Date, DescribeContainer } from '../Common/styles';
import { BiRightArrow } from 'react-icons/bi';

const CodeBy: React.FC = () => {
  return (
    <Container animate={{ translateY: 8, opacity: 1 }} transition={{duration: 0.1}}>
      <Title>
        Frontend Developer Júnior
        <a href="https://www.codeby.com.br/" target="_blank" rel="noreferrer">@CodeBy</a>
      </Title>
      <Date>Fev 2021 - Mai 2021</Date>
      <DescribeContainer>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Desenvolvimento e manutenção de componentes para e-commerces de parceiros 
            usando como ferramenta o JQuery, Javascript, HTML5 e CSS3 para construção 
            na plataforma VTEX CMS.
          </span>
        </div>
        <div>
          <BiRightArrow className="icon" size={12} />
          <span>
            Uso de ferramentas para tornar o trabalho mais ágil como por exemplo Avaza 
            para controle das tarefas e Clockify para controle de tempo.
          </span>
        </div>
      </DescribeContainer>
    </Container>
  );
}

export default CodeBy;