import React, { useState } from 'react';
import styled from 'styled-components';
import { FooterLayout } from 'app/components/layout/FooterLayout';
import { MainSearch } from 'app/containers/pages/main/search/MainSearch';
import { MainCategory } from 'app/containers/pages/main/category/MainCategory';
import { MainNearList } from 'app/containers/pages/main/list/MainNearList';

interface WitMainWrapperProps {
  $change: boolean;
}

const WitMainWrapper = styled.div<WitMainWrapperProps>`
  width: 100%;
  gap: 1rem;
  height: ${(props) => (props.$change ? 'calc(100% - 6rem)' : 'calc(100% - 8rem)')};
  overflow-y: scroll;
  position: fixed;
  top: ${(props) => (props.$change ? '0rem' : '1rem')};
  padding-top: ${(props) => (props.$change ? '6rem' : '4rem')};
`;
export const WitMain = () => {
  const [changeSearch, setChangeSearch] = useState<boolean>(false);
  const detectScroll = (e: React.UIEvent<HTMLElement>) => {
    if (e.currentTarget.scrollTop) {
      setChangeSearch(true);
    } else {
      setChangeSearch(false);
    }
  };
  return (
    <>
      <MainSearch data={{ change: changeSearch }} />
      <WitMainWrapper onScroll={detectScroll} $change={changeSearch}>
        <MainCategory />
        <MainNearList />
        {/* <ImageUpload /> */}
      </WitMainWrapper>
      <FooterLayout />
    </>
  );
};
