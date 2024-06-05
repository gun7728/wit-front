'use client';
import React from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { SearchLayout } from '../components/layout/SearchLayout.tsx';
import { FooterLayout } from '../components/layout/FooterLayout.tsx';

const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Page() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_KEY as string, // 발급 받은 APPKEY
  });

  return (
    <>
      <MapWrapper>
        <SearchLayout />
        <Map
          center={{
            lat: 37.3326,
            lng: 126.97612,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '100%',
          }}
          level={10}
        />
      </MapWrapper>
      <FooterLayout />
    </>
  );
}
