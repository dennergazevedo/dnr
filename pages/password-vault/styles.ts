import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background: radial-gradient(#342F2B, #111);
  padding: 0px 16px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;

  h1{
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #fff;
    margin: 0;
    margin-left: 8px;
  }
  p{
    margin: 0;
    color: #fff;
    font-size: 16px;
    text-transform: lowercase;
    font-variant: small-caps;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Generate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  border-radius: 4px;
  padding: 16px;
  border-bottom: 4px solid #fff;
  width: 100%;
  margin-top: 16px;

  h3{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    color: #333;
    margin: 0;
    margin-bottom: 16px;

    .icon{
      margin-right: 8px;
    }
  }

  .generatorContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .passwordGenerated{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px 16px;
      border-radius: 4px;
      background-color: #FFF;
      margin-bottom: 16px;

      .passwordActionContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 64px;
      }

      span{
        width: 72%;
        font-size: 16px;
        font-weight: bold;
        word-break: break-all;
      }

      .icon{
        cursor: pointer;
        margin-left: 8px;
      }
    }

    .generatorRangeSizeContainer{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      
      .passwordSizeSlider{
        font-size: 14px;
        text-transform: uppercase;
        font-variant: small-caps;
        margin-bottom: 4px;
      }

      .slider{
        width: 100%;
        background: #333;

        &::-moz-range-thumb,
        &::-webkit-slider-thumb{
          background: #333;
        }
      }
    }
  }
`;


