import styled from 'styled-components';

interface ITab{
  menu: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Ubuntu;
  color: #ddd;
  height: 78vh;
  margin: 0 auto;
  cursor: default;
  padding: 20px;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 32px;
`;

export const Tab = styled.div<ITab>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  height: 42px;
  width: 150px;
  transition: 0.2s all;
  font-size: 14px;
  color: ${props => props.menu? "#2ec5ea": "#aaa"};
  border-left: ${props => props.menu? '2px solid #2ec5ea': '2px solid rgb(46, 197, 234, 0.2)'};
  margin-left: 8px;

  @media (min-width: 1024px){
    margin-left: 0px;
    width: 160px;
  }

  &:hover{
    cursor: pointer;
    transition: 0.2s all;
    background-color: rgb(46, 197, 234, 0.1);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 1024px){
    flex-direction: column;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 400px;
  width: 100%;

  @media (min-width: 1024px){
    width: auto;
  }
`;