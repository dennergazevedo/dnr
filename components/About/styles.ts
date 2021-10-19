import styled from 'styled-components';

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