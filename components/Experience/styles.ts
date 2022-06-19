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
  min-height: 78vh;
  cursor: default;
  padding: 16px;
  padding-top: 124px;

  @media (min-width: 1024px){
    height: 78vh;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .experienceContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px){
    justify-content: space-between;
    margin-top: 64px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Tab = styled.div<ITab>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 12px;
  padding-left: 0px;
  height: 42px;
  width: 150px;
  transition: 0.2s all;
  font-size: 14px;
  color: ${props => props.menu? "#2ec5ea": "#aaa"};
  border-left: ${props => props.menu? '2px solid #ddd': '2px solid #aaa2'};
  margin-left: 8px;
  
  .tab-name{
    margin-left: 16px;
  }

  @media (min-width: 1024px){
    margin-left: 0px;
    width: 188px;
  }

  &:hover{
    cursor: pointer;
    transition: 0.2s all;
    background-color: rgb(46, 197, 234, 0.1);
    padding-left: 0;

    .tab-icon-container{
      transition: 0.2s all;
      width: 42px;
    }
  }

  .tab-icon-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0px;
    height: 42px;
    overflow: hidden;
    transition: 0.2s all;
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
  height: auto;
  width: 100%;

  @media (min-width: 1024px){
    width: auto;
    max-width: 40vw;
    height: 100%;
  }
`;