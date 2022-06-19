import React from 'react';
import { Item } from './styles';

const Items: React.FC = () => {
  return (
    <>
      <Item>
        <span className='number'>01.</span>
        <a href="#about">Sobre</a>
      </Item>
      <Item>
        <span className='number'>02.</span>
        <a href="#experience">Experiências</a>
      </Item>
      <Item>
        <span className='number'>03.</span>
        <a href="#technology">Tecnologias</a>
      </Item>
      <Item>
        <span className='number'>04.</span>
        <a href="#contact">Contato</a>
      </Item>
    </>
  );
}

export default Items;