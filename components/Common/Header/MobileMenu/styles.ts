import styled from 'styled-components';

interface IMenu{
  open: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: fixed;

  .menu-icon{
    z-index: 2;
  }
`;

export const MenuContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  overflow: hidden;

  .complement{
    height: 100vh;
    width: 15vw;
  }
`;

export const Menu = styled.div<IMenu>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 100vh;
  background: #333333;
  box-shadow: inset 7px 7px 30px #2b2b2b,
            inset -7px -7px 0px #3b3b3b;
`;