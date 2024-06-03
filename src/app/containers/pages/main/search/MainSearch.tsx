import React from 'react';
import styled from 'styled-components';

interface MainSearchWrapperProps {
  $change: boolean;
}

const MainSearchWrapper = styled.div<MainSearchWrapperProps>`
  padding: 0rem 1rem;
  height: ${(props) => (props.$change ? '4rem' : '6rem')};
  width: 100%;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 0.725rem;
  border-bottom-left-radius: 0.725rem;
  background-color: white;
  transition: all 0.2s;
  z-index: 999;

  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  height: 4rem;
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
  height: 4rem;
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

interface MainSearchData {
  change: boolean;
}

interface MainSearchProps {
  data: MainSearchData;
}

export const MainSearch = (props: MainSearchProps) => {
  const { change } = props.data;
  return (
    <MainSearchWrapper $change={change}>
      {change || (
        <ButtonWrapper>
          <i className='fa-solid fa-bars'></i>
          <span>WIT</span>
          <i className='fa-solid fa-house'></i>
        </ButtonWrapper>
      )}
      <SearchInputWrapper>
        <SearchInput type={'search'} placeholder={'관광지 검색'} />
        {/* <MainSearchResult /> */}
      </SearchInputWrapper>
    </MainSearchWrapper>
  );
};
