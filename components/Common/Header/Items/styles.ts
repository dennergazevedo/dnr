import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;

  @media (min-width: 1024px){
    padding: 4px 16px;
  }

  a{
    font-family: Ubuntu;
    font-size: 16px;
    color: #ddd;
    transition: 0.1s ease-in all;
    cursor: pointer;

    @media (min-width: 1024px){
      font-size: 12px;
    }

    &:hover{
      transition: 0.2s ease-in all;
      color: #2ec5ea;
    }
  }

  .number{
    cursor: default;
    font-size: 12px;
    margin-right: 4px;
    color: #2ec5ea;
  }
`;