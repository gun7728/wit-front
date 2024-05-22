import React from 'react';
import '../../App.scss';
import styled from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { WitMap } from 'app/containers/pages/map/WitMap';
import { WitMain } from 'app/containers/pages/main/WitMain';

const AppPage = styled.div`
  width: 100%;
  height: 100vh;
`;

export const App = () => {
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
