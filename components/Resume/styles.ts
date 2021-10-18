import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: Ubuntu;
  color: #ddd;
  min-height: 70vh;
  margin: 0 auto;
  cursor: default;
  padding: 20px;

  @media (min-width: 1024px){
    padding: 0px;
    max-width: 1024px;
  }

  *{
    margin: 0;
  }

  h3{
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 8px;

    .icon{
      font-size: 16px;
    }
  }

  h1{
    font-size: 2.5rem;
    font-weight: bold;
    opacity: 0.8;

    @media (min-width: 1024px){
      font-size: 4rem;
    }
  }
  
  h2{
    color: #fff;
    font-size: 2rem;
    margin-bottom: 8px;

    @media (min-width: 1024px){
      font-size: 4rem;
    }
  }

  p{
    font-size: 1rem;
    margin-top: 32px;
    max-width: 500px;
    line-height: 1.5rem;
  }

  .glitch {
    position: relative;
    display: inline-block;

    &:before,
    &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    &:hover{
      &:before {
        opacity: 1;
        left: 2px;
        text-shadow: -2px 0 #49FC00;
        clip: rect(24px, 550px, 90px, 0);
        -webkit-animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
                animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
      }
  
      &:after {
        opacity: 1;
        left: -2px;
        text-shadow: -2px 0 #b300fc;
        clip: rect(85px, 550px, 140px, 0);
        -webkit-animation: glitch-anim 2.5s infinite linear alternate-reverse;
                animation: glitch-anim 2.5s infinite linear alternate-reverse;
      }
    }
    
  }

  @keyframes glitch-anim {
    0% {
      clip: rect(110px, 9999999px, 74px, 0);
    }
    4% {
      clip: rect(135px, 9999999px, 143px, 0);
    }
    8% {
      clip: rect(100px, 9999999px, 100px, 0);
    }
    12% {
      clip: rect(38px, 9999999px, 24px, 0);
    }
    16% {
      clip: rect(125px, 9999999px, 83px, 0);
    }
    20% {
      clip: rect(149px, 9999999px, 63px, 0);
    }
    25% {
      clip: rect(12px, 9999999px, 104px, 0);
    }
    29% {
      clip: rect(68px, 9999999px, 7px, 0);
    }
    33% {
      clip: rect(77px, 9999999px, 20px, 0);
    }
    37% {
      clip: rect(99px, 9999999px, 6px, 0);
    }
    41% {
      clip: rect(27px, 9999999px, 99px, 0);
    }
    45% {
      clip: rect(58px, 9999999px, 107px, 0);
    }
    50% {
      clip: rect(108px, 9999999px, 77px, 0);
    }
    54% {
      clip: rect(58px, 9999999px, 87px, 0);
    }
    58% {
      clip: rect(142px, 9999999px, 112px, 0);
    }
    62% {
      clip: rect(124px, 9999999px, 125px, 0);
    }
    66% {
      clip: rect(61px, 9999999px, 53px, 0);
    }
    70% {
      clip: rect(117px, 9999999px, 74px, 0);
    }
    75% {
      clip: rect(21px, 9999999px, 74px, 0);
    }
    79% {
      clip: rect(117px, 9999999px, 70px, 0);
    }
    83% {
      clip: rect(87px, 9999999px, 122px, 0);
    }
    87% {
      clip: rect(95px, 9999999px, 9px, 0);
    }
    91% {
      clip: rect(121px, 9999999px, 75px, 0);
    }
    95% {
      clip: rect(121px, 9999999px, 115px, 0);
    }
    100% {
      clip: rect(101px, 9999999px, 72px, 0);
    }
  }
  @keyframes glitch-anim-2 {
    6% {
      clip: rect(76px, 9999999px, 132px, 0);
    }
    10% {
      clip: rect(13px, 9999999px, 82px, 0);
    }
    13% {
      clip: rect(97px, 9999999px, 2px, 0);
    }
    16% {
      clip: rect(1px, 9999999px, 147px, 0);
    }
    20% {
      clip: rect(113px, 9999999px, 124px, 0);
    }
    23% {
      clip: rect(132px, 9999999px, 130px, 0);
    }
    26% {
      clip: rect(120px, 9999999px, 32px, 0);
    }
    30% {
      clip: rect(2px, 9999999px, 10px, 0);
    }
    33% {
      clip: rect(76px, 9999999px, 46px, 0);
    }
    36% {
      clip: rect(140px, 9999999px, 79px, 0);
    }
    40% {
      clip: rect(37px, 9999999px, 67px, 0);
    }
    43% {
      clip: rect(133px, 9999999px, 95px, 0);
    }
    46% {
      clip: rect(6px, 9999999px, 16px, 0);
    }
    50% {
      clip: rect(98px, 9999999px, 123px, 0);
    }
    53% {
      clip: rect(42px, 9999999px, 88px, 0);
    }
    56% {
      clip: rect(77px, 9999999px, 110px, 0);
    }
    60% {
      clip: rect(22px, 9999999px, 145px, 0);
    }
    63% {
      clip: rect(47px, 9999999px, 75px, 0);
    }
    66% {
      clip: rect(109px, 9999999px, 135px, 0);
    }
    70% {
      clip: rect(118px, 9999999px, 40px, 0);
    }
    73% {
      clip: rect(74px, 9999999px, 141px, 0);
    }
    76% {
      clip: rect(59px, 9999999px, 100px, 0);
    }
    80% {
      clip: rect(14px, 9999999px, 32px, 0);
    }
    83% {
      clip: rect(22px, 9999999px, 28px, 0);
    }
    86% {
      clip: rect(106px, 9999999px, 74px, 0);
    }
    90% {
      clip: rect(33px, 9999999px, 97px, 0);
    }
    93% {
      clip: rect(94px, 9999999px, 29px, 0);
    }
    96% {
      clip: rect(108px, 9999999px, 87px, 0);
    }
    100% {
      clip: rect(5px, 9999999px, 14px, 0);
    }
  }
`;