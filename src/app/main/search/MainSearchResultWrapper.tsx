import React from 'react';
import styled from 'styled-components';

const MainSearchResultWrapper = styled.div`
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
  background-color: white;
  position: relative;
`;
export const MainSearchResult = () => {
  return <MainSearchResultWrapper />;
};
