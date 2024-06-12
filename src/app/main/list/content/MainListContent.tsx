import React, { SetStateAction, useEffect, useState } from 'react';
import { resultType } from '../../../../common/apiType.ts';
import styled from 'styled-components';

interface MainListContentProps {
  data: MainListContentData;
}

interface MainListContentData {
  items: resultType[];
  moreLoad: boolean;
  setMoreLoad: React.Dispatch<SetStateAction<boolean>>;
}

const MainListContentWrapper = styled.div`
  margin: 0.5rem;
  width: calc(100% - 1rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ListContent = styled.div`
  width: 100%;
  display: flex;

  border-radius: 0.725rem;
  height: 5rem;

  img {
    position: relative;
    border-radius: 0.725rem;

    height: auto;
    min-width: 7rem;
    max-width: 7rem;
    min-height: 5rem;
    max-height: 5rem;
  }
`;

const ListInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

  padding-left: 0.5rem;

  h3 {
    padding-bottom: 0.625rem;
  }

  padding-bottom: 0.125rem;
`;

const MainListContentHeader = styled.div`
  position: relative;
  z-index: 5;
  padding: 0 5% 0 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 0.725rem;
  border-top-left-radius: 0.725rem;
  background-color: white;

  h3 {
    padding: 1rem 0;
    color: var(--main-green);
  }

  div {
    display: flex;

    button {
      background-color: transparent;
      border: none;
      width: 100%;

      i {
        font-size: 1.25rem;
        color: var(--main-green);
      }
    }
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
      <MainListContentHeader>
        <h3>내 주변 여행지 리스트</h3>
      </MainListContentHeader>
      {items.map((item, idx) => {
        return (
          <ListContent key={idx} ref={items.length - 4 === idx ? setTarget : null}>
            <img src={item.firstimage} />
            <ListInfo>
              <h3>{item.title}</h3>
              <span>tel : {item.tel}</span>
              <span>address : {item.addr1}</span>
            </ListInfo>
          </ListContent>
        );
      })}
      {moreLoad || <div style={{ alignSelf: 'center' }}>로딩중...</div>}
    </MainListContentWrapper>
  );
};
