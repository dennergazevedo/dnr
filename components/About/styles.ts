import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-family: Ubuntu;
  color: #ddd;
  height: 78vh;
  margin: 0 auto;
  cursor: default;
  padding: 20px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 35vw;
  min-width: 400px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 64px;
  height: 400px;
`;

export const TitleContainer = styled.section`
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

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  p{
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 400px;
  max-height: 128px;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-right: 32px;
  margin-top: 8px;
  transition: 0.2s all;

  &:hover{
    transition: 0.2s all;
    transform: translateX(-2px);
  }

  .tech-icon{
    color: #2ec5ea;
    margin-right: 8px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  filter: grayscale(100%);
  transition: 0.2s all;

  &:hover{
    transition: 0.2s all;
    transform: translateY(-8px);
    filter: grayscale(0%);
    box-shadow: 4px 4px 10px #0003;
  }
`;