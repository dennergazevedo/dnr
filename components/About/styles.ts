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
  max-height: 148px;
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

  .glow-wrap{
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    margin-top: -10px;
  }

  .glow{
    display: block;
    position:absolute;
    width: 40%;
    height: 200%;
    background: rgba(255,255,255,.2);
    top: 0;
    filter: blur(5px);
    transform: rotate(45deg) translate(-450%, 0);
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .image{
    object-fit: cover;
    filter: grayscale(100%) contrast(120%);
    box-shadow: 10px 15px 25px 0 rgba(0,0,0,.2);
    display: block;
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:hover{
    transition: 0.2s all;
    transform: translateY(-8px);

    .image,
    .glow-wrap{
      margin-top: 0;
    }

    .glow{
      transform: rotate(45deg) translate(450%, 0);
      transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .image{
      box-shadow: 1px 1px 10px 0 rgba(0,0,0,.1);
    }
  }
`;