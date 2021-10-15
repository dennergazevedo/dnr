import React from 'react';
import { Item } from './styles';

const Items: React.FC = () => {
  return (
    <>
      <Item>
        <span className='number'>01.</span>
        <a href="#">About</a>
      </Item>
      <Item>
        <span className='number'>02.</span>
        <a href="#">Experience</a>
      </Item>
      <Item>
        <span className='number'>03.</span>
        <a href="#">Tecnology</a>
      </Item>
      <Item>
        <span className='number'>04.</span>
        <a href="#">Contact</a>
      </Item>
    </>
  );
}

export default Items;