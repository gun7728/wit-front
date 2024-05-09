import React from 'react';
import styled from 'styled-components';
import { FooterLayout } from 'app/components/layout/FooterLayout';
import { MainSearch } from 'app/containers/pages/main/search/MainSearch';
import { MainCategory } from 'app/containers/pages/main/category/MainCategory';
import { MainNearList } from 'app/containers/pages/main/list/MainNearList';

const WitMainWrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 4rem);
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const WitMain = () => {
  return (
    <>
      <WitMainWrapper>
        <MainSearch />
        <MainCategory />
        <MainNearList />
        {/* <ImageUpload /> */}
      </WitMainWrapper>
      <FooterLayout />
    </>
  );
};
