import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePageStore } from '../../../store/page';
import { useNavigate } from 'react-router-dom';

const FooterWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: end;
  position: fixed;
  background-color: transparent;
  bottom: 0;
  z-index: 999;

  span {
    font-size: 0.725rem;
    padding-top: 0.25rem;
  }

  div& .active {
    color: var(--main-green);
  }
`;

const FooterButton = styled.div`
  width: 20%;
  height: 3.25rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: white;
  border-top: 1px solid var(--main-gray);

  i {
    font-size: 1.5rem;
  }

  &.button-1 {
    border-top-right-radius: 1rem;
  }

  &.button-3 {
    border-top-left-radius: 1rem;
  }
`;

const MainButtonWrapper = styled.div`
  width: 20%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--main-gray);
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  background-color: var(--main-green);

  span {
    font-size: 1.5rem;
  }

  &.active {
    color: var(--main-yellow) !important;
  }
`;

const buttons = [
  { title: '지도', value: 'map', icon: 'fa-map' },
  { title: '내주변', value: 'near', icon: 'fa-flag' },
  { title: 'WIT', value: 'main', icon: '' },
  { title: '찜', value: 'like', icon: 'fa-bookmark' },
  { title: '마이', value: 'my', icon: 'fa-user' },
];
export const FooterLayout = () => {
  const { page, setPage } = usePageStore();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${page}`);
  }, [page]);

  return (
    <FooterWrapper>
      {buttons?.map((button, idx) => {
        if (button.title === 'WIT')
          return (
            <MainButtonWrapper className={page === 'main' ? 'active' : ''} onClick={() => setPage(button.value)}>
              <span>WIT</span>
            </MainButtonWrapper>
          );
        else
          return (
            <FooterButton
              key={idx}
              className={`button-${idx} ${page === button.value ? 'active' : ''}`}
              onClick={() => setPage(button.value)}
            >
              <i className={`${page === button.value ? 'fa-solid' : 'fa-regular'} ${button.icon}`}></i>
              <span>{button.title}</span>
            </FooterButton>
          );
      })}
    </FooterWrapper>
  );
};
