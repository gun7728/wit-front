import React from 'react';
import styled from 'styled-components';

const MainSearchWrapper = styled.div`
  padding: 1rem 1rem;
  height: 6rem;
  width: 100%;

  input {
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const MainSearch = () => {
  return (
    <MainSearchWrapper>
      <input type={'search'} />
    </MainSearchWrapper>
  );
};
