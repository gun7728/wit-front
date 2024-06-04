import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { resultType } from '../../../../../common/apiType';
import { SlideContent } from 'app/containers/pages/main/list/slide/SlideContent';
import { useCategoryStore } from '../../../../../store/category';
import { Loader } from 'app/components/common-ui/Loading';

const MainNearListWrapper = styled.div`
  top: -1rem;
  width: 100%;
  position: relative;
  display: block;
  height: 26rem;
  overflow: hidden;
`;

interface SlideShowSliderProps {
  $index: number;
  $isDragging: boolean;
}

const SlideShowSlider = styled.div<SlideShowSliderProps>`
  white-space: nowrap;
  transition: ${(props) => (props.$isDragging ? 'none' : 'ease 1000ms')};
  transform: ${(props) => `translate3d(${-props.$index * 100}%,0,0)`};
`;

const SlideHeader = styled.div`
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

  h2 {
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

const SlideTimer = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.725rem;
    width: fit-content;
  }
`;

const ProgressBarContainer = styled.div`
  position: relative;
  width: 80%;
  height: 0.25rem;
  background-color: #e0e0e0;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ $progress: number }>`
  position: absolute;
  width: ${(props) => props.$progress}%;
  height: 100%;
  background-color: var(--main-green);
  transition: width 0.1s linear;
`;

const delay = 10000; // delay in milliseconds

export const MainNearList = () => {
  const { selectedCategory } = useCategoryStore();

  const [index, setIndex] = useState(0);
  const [items, setItems] = useState<resultType[]>([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const resetProgressInterval = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  };

  const setAutoSlide = () => {
    resetTimeout();
    resetProgressInterval();
    setProgress(0);

    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, delay);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 100 / (delay / 2 / 100);
        if (newProgress >= 100) {
          setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
          resetProgressInterval();
        }
        return newProgress;
      });
    }, 100);
  };

  useEffect(() => {
    if (items.length > 0) {
      setAutoSlide();
    }
  }, [index, items]);

  useEffect(() => {
    if (!isDraggingRef.current) {
      setAutoSlide();
    }
    return () => {
      resetTimeout();
      resetProgressInterval();
    };
  }, [isDraggingRef.current]);

  const getData = async (selectedCategory: string[] | null = null) => {
    const url = `/tourApi/locationBasedList1?serviceKey=${import.meta.env.VITE_TOUR_API_ECD_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000`;

    progressIntervalRef.current && clearInterval(progressIntervalRef.current);
    setProgress(0);
    if (selectedCategory) {
      setLoading(true);
      Promise.all(
        selectedCategory.map(async (category) => {
          // HTTP 요청
          return await axios.get(url + '&contentTypeId=' + category);
        }),
      ).then((res) => {
        let newList: resultType[] = [];
        res.map((resut) => {
          const list = resut.data.response.body.items.item;
          newList = [...newList, ...list];
        });
        newList.sort(() => Math.random() - 0.5);
        setItems(newList);
        setLoading(false);
      });
    } else {
      setLoading(true);
      await axios.get(url).then((res) => {
        const list = res.data.response.body.items.item;
        setItems(list);
        setLoading(false);
      });
    }
    setIndex(0);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    isDraggingRef.current = true;
    startPosRef.current = event.clientX;
    resetTimeout();
    resetProgressInterval();
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const currentPos = event.clientX;
    const diff = startPosRef.current - currentPos;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      } else {
        setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      }
      isDraggingRef.current = false;
      setAutoSlide();
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setAutoSlide();
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    isDraggingRef.current = true;
    startPosRef.current = event.touches[0].clientX;
    resetTimeout();
    resetProgressInterval();
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const currentPos = event.touches[0].clientX;
    const diff = startPosRef.current - currentPos;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      } else {
        setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      }
      isDraggingRef.current = false;
      setAutoSlide();
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setAutoSlide();
  };

  useEffect(() => {
    if (selectedCategory.length == 0) {
      getData();
    } else {
      getData(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <MainNearListWrapper
      onMouseDown={!loading ? handleMouseDown : undefined}
      onMouseMove={!loading ? handleMouseMove : undefined}
      onMouseUp={!loading ? handleMouseUp : undefined}
      onMouseLeave={!loading ? handleMouseUp : undefined}
      onTouchStart={!loading ? handleTouchStart : undefined}
      onTouchMove={!loading ? handleTouchMove : undefined}
      onTouchEnd={!loading ? handleTouchEnd : undefined}
    >
      <SlideHeader>
        <h2>내 주변 여행지</h2>
        <div>
          <button onClick={() => loading || setIndex(index > 0 ? index - 1 : items.length - 1)}>
            <i className='fa-solid fa-circle-chevron-left'></i>
          </button>
          <button onClick={() => loading || setIndex(index < items.length - 1 ? index + 1 : 0)}>
            <i className='fa-solid fa-circle-chevron-right'></i>
          </button>
        </div>
      </SlideHeader>

      <SlideShowSlider $index={index} $isDragging={isDraggingRef.current} key={items?.length}>
        {!loading ? (
          items?.map((item, idx) => <SlideContent data={{ content: item }} key={idx} />)
        ) : (
          <div
            style={{
              width: '100 %',
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Loader />
          </div>
        )}
      </SlideShowSlider>
      <SlideTimer>
        <ProgressBarContainer>
          <ProgressBar $progress={progress} />
        </ProgressBarContainer>
        <span>
          {index + 1} / {items.length}
        </span>
      </SlideTimer>
    </MainNearListWrapper>
  );
};
