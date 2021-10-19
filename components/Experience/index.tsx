import React, { useState } from 'react';
import { TitleContainer } from '../Common/styles';
import { Container, TabContainer, Tab, Left, Right } from './styles';
import CodeBy from './CodeBy';
import ArtCopias from './ArtCopias';
import Focus from './Focus';

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
          <Tab onClick={() => toggle(1)}>CodeBy</Tab>
          <Tab onClick={() => toggle(2)}>ArtCópias</Tab>
          <Tab onClick={() => toggle(3)}>Focus</Tab>
        </Left>
        <Right>
          { menu === 1 && <CodeBy /> }
          { menu === 2 && <ArtCopias /> }
          { menu === 3 && <Focus /> }
        </Right>
      </TabContainer>
    </Container>
  );
}

export default Experience;