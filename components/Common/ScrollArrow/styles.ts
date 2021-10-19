import styled from 'styled-components';

export const Container = styled.a`
  cursor: pointer;
  z-index: 1;
  margin-bottom: 64px;

  @keyframes bounce-down {
    0% { opacity: 0; transform: translateY(-20px); }
    50% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(5px); }
  } 

  .icon{ 
    padding: .125em 0;
    color: #ddd8; 
    text-decoration: none;
    text-align: center;
    display: block;
    animation: bounce-down 1.5s infinite; 
  } 
`;