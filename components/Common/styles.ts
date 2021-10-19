import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Ubuntu;
  color: #ddd;
  height: 78vh;
  margin: 0 auto;
  cursor: default;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  span{
    font-size: 1rem;
    color: #2ec5ea;
    margin-right: 8px;
  }

  h3{
    white-space: nowrap;
    margin: 0px 4px;
    margin-right: 8px;
  }

  .separator{
    width: 100%;
    border-bottom: 1px solid #2ec5ea;
    opacity: 0.2;
  }
`;