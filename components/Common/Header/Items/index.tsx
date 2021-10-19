import React from 'react';
import { Item } from './styles';

const Items: React.FC = () => {
  return (
    <>
      <Item>
        <span className='number'>01.</span>
        <a href="#">Sobre</a>
      </Item>
      <Item>
        <span className='number'>02.</span>
        <a href="#">Experiências</a>
      </Item>
      <Item>
        <span className='number'>03.</span>
        <a href="#">Tecnologias</a>
      </Item>
      <Item>
        <span className='number'>04.</span>
        <a href="#">Contato</a>
      </Item>
    </>
  );
}

export default Items;