import React, { useState } from 'react';
import Technology from '../Technology';
import { TitleContainer } from '../Common/styles';
import { Container, TabContainer, Tab, Left, Right } from './styles';
import CodeByJr from './CodeByJr';
import CodeByPl from './CodeByPl';
import CodeByLead from './CodeByLead';
import ArtCopias from './ArtCopias';
import ArtCopiasDesign from './ArtCopiasDesign';
import HeringSr from './HeringSr';
import Image from 'next/image';
import code from './icons/code.jpeg';
import hering from './icons/hering.png';
import art from './icons/artcopias.png';

const Experience: React.FC = () => {

  const [menu, setMenu] = useState<number>(0);

  const toggle = (value: number) => setMenu(value)

  return (
    <Container id="experience">
      <TitleContainer>
        <span>02.</span>
        <h3>Experiência</h3>
        <div className="separator"/>
      </TitleContainer>
      <TabContainer>
        <Technology />
        <div className="experienceContainer">
          <Left>
            <Tab menu={menu === 0 && true} onClick={() => toggle(0)}>
              <div className="tab-icon-container">
                <Image width="42px" height="42px" className="tab-icon" src={hering} alt="hering-logo"/>
              </div>
              <span className="tab-name">FullStack Senior</span>
            </Tab>    
            <Tab menu={menu === 1 && true} onClick={() => toggle(1)}>
              <div className="tab-icon-container">
                <Image width="42px" height="42px" className="tab-icon" src={code} alt="codeby-logo"/>
              </div>
              <span className="tab-name">Dev Lead</span>
            </Tab>
            <Tab menu={menu === 2 && true} onClick={() => toggle(2)}>
              <div className="tab-icon-container">
                <Image width="42px" height="42px" className="tab-icon" src={code} alt="codeby-logo"/>
              </div>
              <span className="tab-name">Dev Pleno</span>
            </Tab>
            <Tab menu={menu === 3 && true} onClick={() => toggle(3)}>
              <div className="tab-icon-container">
                <Image width="42px" height="42px" className="tab-icon" src={code} alt="codeby-logo"/>
              </div>
              <span className="tab-name">Dev Júnior</span>
            </Tab>
            <Tab menu={menu === 4 && true} onClick={() => toggle(4)}>
              <div className="tab-icon-container">
                <Image width="42px" height="42px" className="tab-icon" src={art} alt="codeby-logo"/>
              </div>
              <span className="tab-name">Dev FullStack</span>
            </Tab>
            <Tab menu={menu === 5 && true} onClick={() => toggle(5)}>
              <div className="tab-icon-container">
                <Image width="42px" height="42px" className="tab-icon" src={art} alt="codeby-logo"/>
              </div>
              <span className="tab-name">Designer Gráfico</span>
            </Tab>
          </Left>
          <Right>
            { menu === 0 && <HeringSr/> }
            { menu === 1 && <CodeByLead/> }
            { menu === 2 && <CodeByPl /> }
            { menu === 3 && <CodeByJr /> }
            { menu === 4 && <ArtCopias /> }
            { menu === 5 && <ArtCopiasDesign /> }
          </Right>
        </div>
      </TabContainer>
    </Container>
  );
}

export default Experience;