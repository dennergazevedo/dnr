import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
  background: #E54;

  &:focus{
    border: 3px dotted #dddddd;
  }
`;