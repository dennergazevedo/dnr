import React from 'react';
import { Container } from './styles';
import MobileMenu from './MobileMenu';
import Items from './Items';

interface IProps{
  device: 'mobile' | 'desktop'
}

const Header: React.FC<IProps> = ({ device }: IProps) => {
  return (
    <Container>
      { device === 'mobile'? <MobileMenu /> : <Items /> }
    </Container>
  );
}

export default Header;