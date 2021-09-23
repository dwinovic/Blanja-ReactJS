import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../assets/colors';
import { Button } from '../../../atoms';
import { customMedia } from '../../../Layouts';

const Wrapper = styled.div`
  ${customMedia.lessThan('865px')`
      /* for screen sizes less than 768px */
      display: none;
  `}
  display: flex;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
  }
  .icon:hover {
    cursor: pointer;
  }
  .icon:hover svg g path {
    stroke: ${colors.primary};
  }
  .prefix {
    font: inherit;
  }
`;
const ButtonNav = styled(Button)`
  width: 100px;
  margin-left: 1rem;
`;

const PublicNav = () => {
  return (
    <Wrapper>
      <Link to="/my-bag" className="icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="#9B9B9B"
              strokeWidth="2.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="#9B9B9B"
              strokeWidth="2.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="#9B9B9B"
              strokeWidth="2.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>

      <Link to="/customer-login" className="prefix">
        <ButtonNav primary>Login</ButtonNav>
      </Link>
      <Link to="/seller-login">
        <ButtonNav>Signup</ButtonNav>
      </Link>
    </Wrapper>
  );
};

export default PublicNav;
