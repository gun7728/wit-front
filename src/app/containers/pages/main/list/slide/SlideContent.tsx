import React from 'react';
import styled from 'styled-components';
import { resultType } from '../../../../../../common/apiType';

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
`;

interface ContentProps {
  data: ContentData;
}

interface ContentData {
  content: resultType;
}

export const SlideContent = (props: ContentProps) => {
  const { content } = props.data;
  return (
    <Slide>
      <Content>
        <Image src={content.firstimage} />
        <span>{content.title}</span>
      </Content>
    </Slide>
  );
};
