import React from 'react';
import styled from 'styled-components';
import { FooterLayout } from 'app/components/layout/FooterLayout';

const WitMainWrapper = styled.div`
  width: 10px;
`;
export const WitMain = () => {
  return (
    <>
      <WitMainWrapper>
        <div></div>
      </WitMainWrapper>
      <FooterLayout />
    </>
  );
};
