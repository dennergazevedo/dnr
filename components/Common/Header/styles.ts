import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 16px;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  

  @media(min-width: 1024px){
    border-radius: 0px 0px 0px 100px;
    backdrop-filter: blur(2px);
    background: #0005;
    padding: 8px 32px;
    padding-left: 32px;
    border: 1px solid #ddd7;
    border-top: 0px;
    border-right: 0px;
    position: fixed;
    transition: 0.5s ease;

    &:hover{
      transition: 0.2s ease;
      border-color: #ddd;
      box-shadow: 4px 4px 4px #ddd2;
    }
  }
`;