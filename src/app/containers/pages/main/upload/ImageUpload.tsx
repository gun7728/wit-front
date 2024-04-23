import React from 'react';
import styled from 'styled-components';

const ImageUploadWrapper = styled.div`
  width: 80%;
  height: 20rem;

  border: 1px solid var(--main-gray);
  border-radius: 0.725rem;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: -1rem;
  }

  i {
    margin: 1.5rem;
    color: var(--main-green);
    font-size: 8rem;
  }
`;
export const ImageUpload = () => {
  return (
    <ImageUploadWrapper>
      <h2>Upload your Image</h2>
      <i className='fa-regular fa-image'></i>
      <small>검색하고 싶은 이미지를 업로드해 주세요.</small>
    </ImageUploadWrapper>
  );
};
