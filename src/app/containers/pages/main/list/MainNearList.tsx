import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { resultType } from '../../../../../common/apiType';

const MainNearListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
`;
const SlideShow = styled.div`
  padding-top: 3rem;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
`;

interface SlideShowSliderProps {
  $index: number;
}

const SlideShowSlider = styled.div<SlideShowSliderProps>`
  white-space: nowrap;
  transition: ease 1000ms;
  transform: ${(props) => `translate3d(${-props.$index * 100}%,0,0)`};
`;

const Slide = styled.div`
  display: inline-block;
  height: 10rem;
  width: 100%;

  div {
    color: black;
    opacity: 1;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;

    h2 {
      z-index: 3;
      font-weight: bold;
      color: black;
      -webkit-text-stroke-color: white;
      -webkit-text-stroke-width: 1px;
    }
  }

  img {
    height: 10rem;
    width: 100%;
    opacity: 0.5;
  }
`;
const SlideshowDots = styled.div`
  text-align: center;
  position: relative;
  top: -3rem;
`;

interface SlideshowDotProps {
  $active: boolean;
}

const SlideshowDot = styled.div<SlideshowDotProps>`
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px;
  background-color: ${(props) => (props.$active ? '#6a0dad' : '#c4c4c4')};
`;
const delay = 2500;

export const MainNearList = () => {
  const [index, setIndex] = React.useState(0);
  const [itmes, setItems] = useState<resultType[] | null>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    if (!itmes) return;
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === itmes.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index, itmes]);

  const getData = async () => {
    axios
      .get(
        `/tourApi/locationBasedList1?serviceKey=${import.meta.env.VITE_TOUR_API_ECD_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000&contentTypeId=15`,
      )
      .then((res) => {
        const list = res.data.response.body.items.item;
        console.log(list);
        setItems(list);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <MainNearListWrapper>
      <SlideShow>
        <SlideShowSlider $index={index}>
          {itmes?.map((item, index) => (
            <Slide key={index}>
              <div>
                <h2>{item.title}</h2>
              </div>
              <img src={item.firstimage} />
            </Slide>
          ))}
        </SlideShowSlider>
        <SlideshowDots>
          {itmes?.map((dot, idx) => (
            <SlideshowDot
              $active={index === idx}
              key={idx}
              onClick={() => {
                setIndex(idx);
              }}
            ></SlideshowDot>
          ))}
        </SlideshowDots>
      </SlideShow>
    </MainNearListWrapper>
  );
};
