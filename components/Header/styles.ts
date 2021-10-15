import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100vw;
  padding: 0px 32px;
  padding-left: 0px;
  z-index: 2;

  @media(min-width: 1024px){
    padding: 0px 64px;
    padding-left: 0px;
  }
`;

export const Left = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Logo = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  padding-left: 64px;
  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  transition: 0.1s ease-in all;
  background: #2ec5ea;
  box-shadow: inset 5px 5px 3px #2ab5d7,
              inset -5px -5px 3px #32d5fd;

  &:hover{
    transition: 0.2s ease-in all;
    padding-left: 72px;
  }


  span{
    color: #333;
    font-size: 1.75rem;
    font-family: Ubuntu;
    text-shadow: none;
    font-weight: bold;
    transition: 0.5s ease-in all;

    &:hover{
      transition: 0.2s ease-in all;
      cursor: pointer;
      text-shadow: 0 0 4px #3335, 0 0 8px #3335, 0 0 24px #21ABCD;
    }
  }
`;

export const Right = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;