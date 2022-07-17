import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  width: 100%;

  .descrition{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    span{
      font-size: 14px;
      color: #fff;
    }
  
    button{
      background-color: transparent;
      border: none;
      color: #ccc;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;
    }
  }
  
  .imageContainer{
    margin-left: 8px;
    border-radius: 50%;
    overflow: hidden;
    width: 32px;
    height: 32px;
  }
`;