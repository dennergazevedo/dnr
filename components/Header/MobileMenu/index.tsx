import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import Items from '../Items';
import { Container, Menu, MenuContainer } from './styles';

const MobileMenu: React.FC = () => {

  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <Container>
      {
        menu ?
        <>
          <IoClose className="menu-icon" onClick={toggleMenu} size={24} color="#FFF" />
          <MenuContainer>
            <div onClick={toggleMenu} className="complement"/>
            <Menu open={menu}>
              <Items />
            </Menu>
          </MenuContainer>
        </>
        :
        <BiMenu className="menu-icon" onClick={toggleMenu} size={24} color="#FFF" />
      }
    </Container>
  );
}

export default MobileMenu;