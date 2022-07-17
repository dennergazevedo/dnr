import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(#342F2B, #111);

  h1{
    font-size: 80px;
    color: #ccc;
    margin: 0;
  }

  h3{
    font-size: 32px;
    color: #ccc;
    margin: 0;
    margin-bottom: 24px;
    font-weight: normal;
  }

  button{
    background-color: #2ec5ea;
    color: #fff;
    padding: 8px 64px;
    outline: 0;
    border: none;
    border-radius: 4px;
    text-transform: lowercase;
    font-variant: small-caps;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
      background-color: #2ec5ea80;
    }
  }
`;