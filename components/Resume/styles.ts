import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: Ubuntu;
  color: #ddd;
  height: 70vh;
  margin: 0 auto;
  cursor: default;
  padding: 20px;

  @media (min-width: 1024px){
    padding: 0px;
    max-width: 1024px;
  }

  *{
    margin: 0;
  }

  h3{
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 8px;

    .icon{
      font-size: 16px;
    }
  }

  h1{
    font-size: 2.5rem;
    font-weight: bold;

    @media (min-width: 1024px){
      font-size: 4rem;
    }
  }
  
  h2{
    color: #ddd8;
    font-size: 2rem;
    margin-bottom: 8px;

    @media (min-width: 1024px){
      font-size: 4rem;
    }
  }

  p{
    font-size: 1rem;
    margin-top: 32px;
    max-width: 500px;
    line-height: 1.5rem;
  }
`;