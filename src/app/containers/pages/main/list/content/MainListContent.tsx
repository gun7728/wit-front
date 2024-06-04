import React, { SetStateAction, useEffect, useState } from 'react';
import { resultType } from '../../../../../../common/apiType';
import styled from 'styled-components';

interface MainListContentProps {
  data: MainListContentData;
}

interface MainListContentData {
  items: resultType[];
  moreLoad: boolean;
  setMoreLoad: React.Dispatch<SetStateAction<boolean>>;
}

const MoreLoadDiv = styled.div``;
const MainListContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    height: 4rem;
  }
`;
export const MainListContent = (props: MainListContentProps) => {
  const [target, setTarget] = useState<HTMLSpanElement | null>(null); // 관찰대상 target
  const { items, moreLoad, setMoreLoad } = props.data;

  useEffect(() => {
    if (!target) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setMoreLoad(true);
      }
    });
    io.observe(target);
  }, [target]);

  return (
    <MainListContentWrapper>
      {items.map((e, idx) => {
        return (
          <div key={idx} ref={items.length - 4 === idx ? setTarget : null}>
            <span>{e.title}</span>
          </div>
        );
      })}
      {moreLoad || <div style={{ alignSelf: 'center' }}>로딩중...</div>}
    </MainListContentWrapper>
  );
};
