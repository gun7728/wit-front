import React from 'react';
import styled from 'styled-components';
import { FooterLayout } from 'app/components/layout/FooterLayout';
import { ImageUpload } from 'app/containers/pages/main/upload/ImageUpload';
import { MainSearch } from 'app/containers/pages/main/search/MainSearch';
import { MainCategory } from 'app/containers/pages/main/category/MainCategory';

const WitMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WitMain = () => {
  return (
    <>
      <WitMainWrapper>
        <MainSearch />
        <MainCategory />
        {/* <ImageUpload /> */}
      </WitMainWrapper>
      <FooterLayout />
    </>
  );
};
