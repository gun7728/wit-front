import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageUploadWrapperProps {
  $open: boolean;
}

const ImageUploadWrapper = styled.div<ImageUploadWrapperProps>`
  width: 80%;
  height: ${(props) => (props.$open ? '12rem' : '0rem')};
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;

  h2 {
    margin-top: -1rem;
  }

  i {
    margin: 1rem;
    color: var(--main-green);
    font-size: 6rem;
  }
`;

const ImageSearchOpenBtn = styled.button`
  margin-top: 1rem;
  width: 75%;
  background-color: var(--main-green);
  height: 2rem;
  color: var(--main-gray);
  border: none;
  border-radius: 0.25rem;
`;
export const ImageUpload = () => {
  const [openImageUpload, setOpenImageUpload] = useState<boolean>(false);
  return (
    <>
      <ImageSearchOpenBtn onClick={() => setOpenImageUpload(!openImageUpload)}>이미지 검색</ImageSearchOpenBtn>
      <ImageUploadWrapper $open={openImageUpload}>
        <h3>Upload your Image</h3>
        <i className='fa-regular fa-image'></i>
        <small>검색하고 싶은 이미지를 업로드해 주세요.</small>
      </ImageUploadWrapper>
    </>
  );
};
