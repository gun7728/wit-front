import React from 'react';
import styled from 'styled-components';
import { MainSearchResult } from 'app/containers/pages/main/search/MainSearchResultWrapper';

const MainSearchWrapper = styled.div`
  padding: 0rem 1rem;
  height: 6rem;
  width: 100%;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 0.725rem;
  border-bottom-left-radius: 0.725rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--main-green);

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const SearchInputWrapper = styled.div`
  height: 3rem;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--main-green);
  border-radius: 0.5rem;
  padding-left: 1rem;

  &::placeholder {
    color: lightgray;
  }
`;

export const MainSearch = () => {
  return (
    <MainSearchWrapper>
      <ButtonWrapper>
        <i className='fa-solid fa-bars'></i>
        <span>WIT</span>
        <i className='fa-solid fa-house'></i>
      </ButtonWrapper>
      <SearchInputWrapper>
        <SearchInput type={'search'} placeholder={'관광지 검색'} />
        {/* <MainSearchResult /> */}
      </SearchInputWrapper>
    </MainSearchWrapper>
  );
};
