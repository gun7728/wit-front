import React from 'react';
import styled from 'styled-components';
import { categories } from 'app/containers/pages/main/category/categories';
import { useCategoryStore } from '../../../../../store/category';

interface CategoryWrapperProps {
  $change: boolean;
}

const CategoryWrapper = styled.div<CategoryWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--main-green);
  position: ${(props) => (props.$change ? 'fixed' : '')};
  height: ${(props) => (props.$change ? '7rem' : '15rem')};
  top: 0;
  z-index: 6;
`;

const CategoryTitle = styled.div`
  padding-top: 4rem;
  padding-left: 1rem;
  width: 100%;
  height: 6rem;
  display: flex;
  gap: 0.25rem;
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

const Categories = styled.div<CategoryWrapperProps>`
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  width: 100%;
  height: 8rem;
  display: flex;
  gap: ${(props) => (props.$change ? '1rem' : '2rem')};
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

const CategorySimpleButton = styled.div<CategoryButtonProps>`
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 2rem;
  position: relative;

  span {
    align-content: center;
    text-align: center;
    color: ${(props) => (props.$selected ? ' rgba(var(--main-gray-custom),1);' : ' rgba(var(--main-gray-custom), 0.5);')}
    width: 6rem;
    height: 2.5rem;

    border-bottom: ${(props) => (props.$selected ? '0.125rem solid white;' : 'none;')}

    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    white-space: nowrap;
  }
`;

interface MainCategoryProps {
  data: MainCategoryData;
}

interface MainCategoryData {
  change: boolean;
}

export const MainCategory = (props: MainCategoryProps) => {
  const { setSelectedCategory, selectedCategory } = useCategoryStore();
  const { change } = props.data;

  const openPage = (value: string) => {
    if (selectedCategory.includes(value)) {
      setSelectedCategory(selectedCategory.filter((cat) => cat !== value));
    } else {
      setSelectedCategory([...selectedCategory, value]);
    }
  };

  return (
    <CategoryWrapper $change={change}>
      {change || (
        <CategoryTitle>
          <h2> Category </h2>
          <span>나만의 카테고리를 조합해 보세요</span>
        </CategoryTitle>
      )}
      <Categories $change={change}>
        {categories.map((category, idx) => {
          if (change)
            return (
              <CategorySimpleButton
                $selected={selectedCategory.includes(category.value)}
                onClick={() => openPage(category.value)}
                key={idx}
              >
                <span>{category.title}</span>
              </CategorySimpleButton>
            );
          else
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
