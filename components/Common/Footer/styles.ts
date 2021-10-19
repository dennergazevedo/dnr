import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100vw;
  padding: 0px 64px;
  position: fixed;
  bottom: 0;
  z-index: 0;
`;

export const Left = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-top: 24px;
    cursor: pointer;

    .icon{
      color: #ddd;
      transition: 0.2s ease-in all;

      &:hover{
        transition: 0.2s ease-in all;
        transform: translateY(-4px);
        color: #2ec5ea;
      }
    }
  }
`;

export const Line = styled.div`
  display: flex;
  height: 120px;
  width: 1px;
  border-right: 1px solid #DDD;
  margin-top: 24px;
`;

export const Right = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-size: 12px;
    font-family: Ubuntu;
    writing-mode: vertical-rl;
    letter-spacing: 0.1em;
    cursor: pointer;
    color: #ddd;
    transition: 0.1s ease-in all;

    &:hover{
      color: #2ec5ea;
      transition: 0.2s ease-in all;
      transform: translateY(-4px);
    }
  }
`;