import React from 'react';
import styled from 'styled-components';
import { categories } from 'app/containers/pages/main/category/categories';

const CategoryWrapper = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main-green);
  margin-bottom: -1rem;
`;
const CategoryTitle = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  color: var(--main-gray);

  h3 {
    font-weight: bold;
  }
`;

const Categories = styled.div`
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  width: 100%;
  height: 8rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: start;
  padding: 0 0.5rem;
`;

const CategoryButton = styled.div`
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  i {
    align-content: center;
    text-align: center;
    background-color: var(--main-gray);
    font-size: 2rem;
    color: var(--main-green);
    padding: 0.8rem;
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 0.3rem;
    font-style: normal;
    line-height: 1.4rem;
    white-space: nowrap;
    color: var(--main-gray);
  }
`;
export const MainCategory = () => {
  const openPage = (value: string) => {
    console.log(value);
  };

  return (
    <CategoryWrapper>
      <CategoryTitle>
        <h3>카테고리 선택</h3>
        <span>뭘 적을까</span>
      </CategoryTitle>
      <Categories>
        {categories.map((category, idx) => {
          return (
            <CategoryButton onClick={() => openPage(category.value)} key={idx}>
              <i className={`fa-solid ${category.icon}`}></i>
              <span>{category.title}</span>
            </CategoryButton>
          );
        })}
      </Categories>
    </CategoryWrapper>
  );
};
