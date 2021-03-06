import styled from 'styled-components';
import { customMedia } from '../../../Layouts';

export const Card = styled.div`
  color: #222222;
  background-color: white;
  box-shadow: 0px 0px 14px rgba(173, 173, 173, 0.25);
  border-radius: 10px;
  display: flex;
  height: 100%;
  flex-direction: column;
  /* background-color: yellow; */
  /* width: 250px; */
  ${customMedia.lessThan('1670px')` 
    // flex-direction: column;
  `}
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 14px rgba(44, 44, 44, 0.164);
    cursor: pointer;
  }
  .image-wrapper {
    width: 100%;
    height: 140px;
    /* background-color: yellow; */
    .image-product {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
  }
`;

export const BodyProduct = styled.div`
  padding: 10px 12px;

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .price {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin: 6px 0;
    color: #db3022;
  }

  .store {
    /* font-family: Metropolis; */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 12px;
    color: #9b9b9b;
    margin-bottom: 11px;
    margin-top: 11px;
  }

  .sold {
    margin-left: 3px;
    color: #9b9b9b;
  }
`;
