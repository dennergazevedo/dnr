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
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  h3{
    white-space: nowrap;
    margin: 0px 4px;
    margin-right: 8px;
  }

  .separator{
    width: 100%;
    border-bottom: 1px solid #2ec5ea;
  }
`;