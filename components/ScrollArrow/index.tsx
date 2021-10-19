import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Container } from './styles';

interface IProps{
  ancora: string;
}

const ScrollArrow: React.FC<IProps> = ({ancora}: IProps) => {
  return (
    <Container href={`#${ancora}`}>
      <MdKeyboardArrowDown className="icon" size={120} />
    </Container>
  );
}

export default ScrollArrow;