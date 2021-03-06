import React from 'react';
import styled from 'styled-components';
import { DMNullImage } from '../../../assets/images';
import { customMedia } from '../../Layouts';

const ImageProducts = ({ images }) => {
  // const [multipleImage, setMultipleImage] = useState();

  return (
    <ImageWrapper>
      {images && (
        <div className="image-main-wrapper">
          <img
            className="main-image"
            src={images[0] ? images[0] : DMNullImage}
            alt="1"
          />
        </div>
      )}
      <div className="tumb-wrapper">
        {images &&
          images.map((image) => (
            <div className="mini-img">
              <img
                className="mini-img"
                src={images[0] ? images[0] : DMNullImage}
                alt="2"
              />
            </div>
          ))}
      </div>
    </ImageWrapper>
  );
};

export default ImageProducts;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 50%;
  position: relative;

  ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */
    width: 600px;
  `}
  ${customMedia.lessThan('872px')` 
    // background-color: pink;
    width: 100%;
    // flex-direction: row;
  `} 


  .image-main-wrapper {
    width: 400px;
    height: 379px;
    display: flex;
    ${customMedia.lessThan('872px')` 
      width : 100%; 
    `}
    img.main-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  img {
    border-radius: 20px;
  }

  .tumb-wrapper {
    margin-top: 1rem;
    height: 60px;
    /* width: 100%; */
    position: relative;
    /* background-color: red; */
    display: flex;
    gap: 1rem;
    overflow: hidden;
    ${customMedia.lessThan('872px')` 
      flex-flow: wrap;
      width : 100%; 
    `}
    .mini-img {
      display: flex;
      /* background-color: blue; */
      width: 100px;
      ${customMedia.lessThan('872px')` 
        width: 60px;
      `}
      img {
        border-radius: 5px;
      }
    }
    ${customMedia.lessThan('laptop')`
    /* for screen sizes less than 1280px */ 
    display: inline-flex;
  `}
  }
`;
