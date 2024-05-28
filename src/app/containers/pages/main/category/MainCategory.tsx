import React from 'react';
import styled from 'styled-components';
import { categories } from 'app/containers/pages/main/category/categories';
import { useCategoryStore } from '../../../../../store/category';

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

  h2 {
    text-shadow: 2px 0 rgba(0, 0, 0, 0.1);
    font-weight: bold;
  }

  span {
    color: var(--main-yellow);
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

interface CategoryButtonProps {
  $selected: boolean;
}

const CategoryButton = styled.div<CategoryButtonProps>`
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  i {
    align-content: center;
    text-align: center;
    background-color: ${(props) => (props.$selected ? ' rgba(var(--main-gray-custom),1);' : ' rgba(var(--main-gray-custom), 0.5);')}
    font-size: 2rem;
    color: ${(props) => (props.$selected ? ' rgba(var(--main-green-custom),1);' : ' rgba(var(--main-green-custom), 0.5);')}
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
  const { setSelectedCategory, selectedCategory } = useCategoryStore();
  const openPage = (value: string) => {
    if (selectedCategory.includes(value)) {
      setSelectedCategory(selectedCategory.filter((cat) => cat !== value));
    } else {
      setSelectedCategory([...selectedCategory, value]);
    }
  };

  return (
    <CategoryWrapper>
      <CategoryTitle>
        <h2>Category</h2>
        <span>나만의 카테고리를 조합해 보세요</span>
      </CategoryTitle>
      <Categories>
        {categories.map((category, idx) => {
          return (
            <CategoryButton
              $selected={selectedCategory.includes(category.value)}
              onClick={() => openPage(category.value)}
              key={idx}
            >
              <i className={`fa-solid ${category.icon}`}></i>
              <span>{category.title}</span>
            </CategoryButton>
          );
        })}
      </Categories>
    </CategoryWrapper>
  );
};
