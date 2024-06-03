import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 90%;
  position: fixed;
  top: 2rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  left: calc((100% - 90%) / 2);
  align-items: center;
  border-bottom: 1px solid var(--main-gray);
  z-index: 999;
`;

const SearchWrapper = styled.div`
  background-color: white;
  height: 3rem;
  width: 85%;
  border-radius: 0.725rem;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);

  input {
    padding-left: 1rem;
    height: 100%;
    width: 100% !important;
    border: none;
    border-radius: 0.725rem !important;
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
const ButtonWrapper = styled.div`
  background-color: var(--main-green);
  height: 3rem;
  width: 13%;
  border-radius: 0.725rem;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);

  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;

  i {
    font-size: 1.125rem;
    color: var(--main-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
  }
`;
export const SearchLayout = () => {
  return (
    <HeaderWrapper>
      <SearchWrapper>
        <input type={'search'} placeholder={'장소 / 주소 검색'} />
      </SearchWrapper>
      <ButtonWrapper>
        <i className='fa-solid fa-route'></i>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};
