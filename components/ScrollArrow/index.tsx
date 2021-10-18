import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Container } from './styles';

const ScrollArrow: React.FC = () => {
  return (
    <Container>
      <MdKeyboardArrowDown className="icon" size={120} />
    </Container>
  );
}

export default ScrollArrow;