import React from 'react';
import styled from 'styled-components';
import { categories } from 'app/containers/pages/main/category/categories';

const CategoryWrapper = styled.div`
  margin-top: 1rem;
  width: 90%;
  height: 12rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CategoryButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  i {
    font-size: 1.5rem;
    background-color: var(--main-gray);
    padding: 0.8rem;
    border-radius: 0.725rem;
    color: var(--main-green);
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 0.2rem;
    font-style: normal;
    line-height: 1.4rem;
    white-space: nowrap;
    color: #000;
  }
`;
export const MainCategory = () => {
  const openPage = (value: string) => {
    console.log(value);
  };

  return (
    <CategoryWrapper>
      {categories.map((category) => {
        return (
          <CategoryButton onClick={() => openPage(category.value)}>
            <i className={`fa-solid ${category.icon}`}></i>
            <span>{category.title}</span>
          </CategoryButton>
        );
      })}
    </CategoryWrapper>
  );
};
