import React, { useState } from 'react';
import { TitleContainer } from '../Common/styles';
import { Container, TabContainer, Tab, Left, Right } from './styles';
import CodeByJr from './CodeByJr';
import CodeByPl from './CodeByPl';
import CodeByLead from './CodeByLead';
import ArtCopias from './ArtCopias';
import ArtCopiasDesign from './ArtCopiasDesign';

const Experience: React.FC = () => {

  const [menu, setMenu] = useState<number>(1);

  const toggle = (value: number) => setMenu(value)

  return (
    <Container id="experience">
      <TitleContainer>
        <span>02.</span>
        <h3>Experiência</h3>
        <div className="separator"/>
      </TitleContainer>
      <TabContainer>
        <Left>
          <Tab menu={menu === 1 && true} onClick={() => toggle(1)}>Dev Lead</Tab>
          <Tab menu={menu === 2 && true} onClick={() => toggle(2)}>Dev Pleno</Tab>
          <Tab menu={menu === 3 && true} onClick={() => toggle(3)}>Dev Júnior</Tab>
          <Tab menu={menu === 4 && true} onClick={() => toggle(4)}>Dev FullStack</Tab>
          <Tab menu={menu === 5 && true} onClick={() => toggle(5)}>Designer Gráfico</Tab>
        </Left>
        <Right>
          { menu === 1 && <CodeByLead/> }
          { menu === 2 && <CodeByPl /> }
          { menu === 3 && <CodeByJr /> }
          { menu === 4 && <ArtCopias /> }
          { menu === 5 && <ArtCopiasDesign /> }
        </Right>
      </TabContainer>
    </Container>
  );
}

export default Experience;