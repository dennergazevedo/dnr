import styled from 'styled-components';

export const Button = styled.button`
  background: #333;
  color: #ddd;
  padding: 8px 0px;
  font-size: 16px;
  border: none;
  border-radius: 0.5em;
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  overflow: hidden;
  height: 48px;
  cursor: pointer;
  width: 150px;
  margin-bottom: 16px;

  p{
    font-size: 16px;
    font-weight: bold;
    text-transform: lowercase;
    font-variant: small-caps;
    margin-left: 48px;
  }

  .icon {
    background: #fff;
    margin-right: 1em;
    height: 38px;
    width: 38px;
    border-radius: 0.5em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0.3em;
    transition: all .7s;
  }

  .share {
    width: 1.3rem;
    height: 1.3rem;
  }

  &:hover .icon {
    width: calc(100% - 0.6rem);
  }

  &:hover .share {
    width: calc(100% - 0.6rem);
    display: none;
  }

  .password-share {
    color: #2ec5ea;
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }

  &:hover .icon .password-share  {
    display: flex;
  }
`;