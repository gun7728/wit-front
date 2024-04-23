import React, { useEffect } from 'react';
import '../../App.scss';
import styled from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { WitMap } from 'app/containers/pages/map/WitMap';
import { WitMain } from 'app/containers/pages/main/WitMain';

const AppPage = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
`;

export const App = () => {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <AppPage>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<WitMain />} />
          <Route path='/map' element={<WitMap />} />
          <Route path='/*' element={<Navigate to='/main' />} />
        </Routes>
      </BrowserRouter>
    </AppPage>
  );
};
