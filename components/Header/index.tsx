import React, { useState, useEffect } from 'react';
import { Container, Left, Logo, Right } from './styles';
import MobileMenu from './MobileMenu';
import Items from './Items';

interface IProps{
  device: 'mobile' | 'desktop'
}

const Header: React.FC<IProps> = ({ device }: IProps) => {
  return (
    <Container>
      <Left>
        <Logo>
          <span>dnr</span>
        </Logo>
      </Left>
      <Right>
        { device === 'mobile'? <MobileMenu /> : <Items /> }
      </Right>
    </Container>
  );
}

export default Header;