import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 90vw;
  overflow-y: scroll;
  transition: 2s all;
  opacity: 0;
  margin:0;
  margin-top: 16px;

  @media (min-width: 1024px){
    width: 40vw;
    padding: 8px 16px;
    margin-top: 0px;
    max-height: 350px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #333; 
  }
  
  &::-webkit-scrollbar-thumb {
    background: #444; 
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #666; 
  }

  &:hover{
    outline: 2px dashed #666;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ddd;
  margin: 8px 0;

  a{
    margin-left: 8px;
    color: #2ec5ea;
    opacity: 0.8;
    transition: 0.2s all;

    &:hover{
      transition: 0.2s all;
      opacity: 1;
    }
  }
`;

export const Date = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #aaa;
`;

export const DescribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 4px 0px;
  margin-bottom: 16px;

  div{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
    width: 100%;

    span{
      width: 100%;
      line-height: 1.3rem;
      color: #aaa;
      font-size: 14px;
    }

    .icon{
      color: #2ec5ea;
      margin-right: 8px;
      margin-top: 4px;
    }
  }
`;