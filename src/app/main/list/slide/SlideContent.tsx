import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { resultType } from '../../../../common/apiType.ts';
import { cateogryType } from '../../../../common/cateogryType.ts';

const Content = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    left: 2rem;
    bottom: 1rem;
    position: relative;
    background-color: var(--main-green);
    padding: 0.5rem 1rem;
    color: white;
    align-self: start;
    font-size: 15px;
    border-radius: 0.725rem;
    font-weight: bold;

    small {
      color: var(--main-yellow);
    }
  }
`;

const Slide = styled.div`
  display: inline-block;
  height: 20rem;
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  height: 18rem;
  max-width: 90%;
  border-radius: 0.725rem;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
  max-width: 90%;
`;

interface ContentProps {
  data: ContentData;
}

interface ContentData {
  content: resultType;
}

export const SlideContent = (props: ContentProps) => {
  const { content } = props.data;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false); // Reset imageLoaded when the image source changes
  }, [content.firstimage]);

  return (
    <Slide>
      <Content>
        <img src={content.firstimage} style={{ display: 'none' }} onLoad={() => setImageLoaded(true)} alt='' />
        {imageLoaded ? <Image src={content.firstimage} /> : <Loading>Image Loading...</Loading>}
        {/* <Image src={content.firstimage} /> */}
        <span>
          {content.title} <small>{cateogryType[content.cat1]}</small>
        </span>
      </Content>
    </Slide>
  );
};
