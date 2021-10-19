import styled from 'styled-components';

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
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 64px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  height: 42px;
  width: 130px;
  border-left: 2px solid rgb(46, 197, 234, 0.2);
  transition: 0.2s all;
  font-size: 12px;
  color: #2EC5EA;

  &:hover{
    cursor: pointer;
    transition: 0.2s all;
    background-color: rgb(46, 197, 234, 0.3);
    border-left: 2px solid #2ec5ea;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;