import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import WrapperSearchInput from './WrapperSearchInput';

const Wrapper = styled.div`
  /* background-color: yellowgreen; */
  width: 100%;
  display: flex;
  height: 40px;
  gap: 1rem;
  .icon-filter:hover {
    cursor: pointer;
  }
  .icon-filter:hover path {
    stroke: ${colors.primary};
  }
`;

const SearchInput = ({ onChange, value }) => {
  return (
    <Wrapper>
      <WrapperSearchInput>
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Mau Mencari Apa? Cari saya atau cari dia!"
          onChange={onChange}
          value={value}
        />
        <div className="icon-wrapper">
          <svg
            class="stroke icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.6697 16.1666L12.7415 11.2366C13.6249 10.0317 14.0981 8.57511 14.0915 7.08114C14.0747 3.18139 10.9205 0.0225957 7.02076 7.16372e-05C5.15452 -0.00837202 3.36242 0.729916 2.04368 2.05047C0.724944 3.37102 -0.0108835 5.16413 0.000121693 7.03036C0.016977 10.9305 3.17147 14.0895 7.07155 14.1121C8.57161 14.1186 10.0335 13.6398 11.2392 12.7473L11.2443 12.7434L16.168 17.6696C16.4342 17.9489 16.8308 18.062 17.2043 17.965C17.5777 17.868 17.8692 17.5762 17.9659 17.2027C18.0626 16.8292 17.9492 16.4326 17.6697 16.1666ZM7.06638 12.7004C3.94649 12.6824 1.42294 10.1554 1.40924 7.0355C1.40082 5.54272 1.98953 4.10851 3.04432 3.05215C4.09912 1.99579 5.53244 1.40495 7.02524 1.41115C10.1451 1.42909 12.6687 3.95609 12.6824 7.076C12.6908 8.56879 12.1021 10.003 11.0473 11.0594C9.99251 12.1157 8.55918 12.7066 7.06638 12.7004Z"
              fill="#8E8E93"
            />
          </svg>
        </div>
      </WrapperSearchInput>
      <div className="icon-filter">
        <svg
          class="stroke"
          width="40"
          height="40"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z"
            stroke="#8E8E93"
            stroke-width="1"
          />
          <path
            d="M29.3333 13.5H12.6667L19.3333 21.3833V26.8333L22.6667 28.5V21.3833L29.3333 13.5Z"
            stroke="#8E8E93"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default SearchInput;