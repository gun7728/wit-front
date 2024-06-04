import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FooterLayout } from 'app/components/layout/FooterLayout';
import { MainSearch } from 'app/containers/pages/main/search/MainSearch';
import { MainCategory } from 'app/containers/pages/main/category/MainCategory';
import { MainNearList } from 'app/containers/pages/main/list/MainNearList';
import { MainListContent } from 'app/containers/pages/main/list/content/MainListContent';
import axios from 'axios';
import { resultType } from '../../../../common/apiType';
import { useCategoryStore } from '../../../../store/category';

interface WitMainWrapperProps {
  $change: boolean;
}

const WitMainWrapper = styled.div<WitMainWrapperProps>`
  width: 100%;
  gap: 1rem;
  height: calc(100% - 4rem);
  // height: ${(props) => (props.$change ? 'calc(100% - 6rem)' : 'calc(100% - 8rem)')};
  overflow-y: scroll;
  position: fixed;
  //top: ${(props) => (props.$change ? '0rem' : '1rem')};
  padding-top: ${(props) => (props.$change ? '6rem' : '4rem')};
`;
export const WitMain = () => {
  const { selectedCategory } = useCategoryStore();
  const [changeSearch, setChangeSearch] = useState<boolean>(false);
  const [items, setItems] = useState<resultType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [moreLoad, setMoreLoad] = useState<boolean>(false);

  const detectScroll = (e: React.UIEvent<HTMLElement>) => {
    console.log(e.currentTarget.scrollTop);
    if (e.currentTarget.scrollTop > 200) {
      setChangeSearch(true);
    } else {
      setChangeSearch(false);
    }
  };

  useEffect(() => {
    if (selectedCategory.length == 0) {
      getData();
    } else {
      getData(selectedCategory);
    }
  }, [selectedCategory]);

  const getData = async (selectedCategory: string[] | null = null, moreFlag: boolean = false, pageNum: number = 1) => {
    const url = `/tourApi/locationBasedList1?serviceKey=${import.meta.env.VITE_TOUR_API_ECD_KEY}&numOfRows=10&pageNo=${pageNum}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000`;

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

        moreFlag ? setItems([...items, ...newList]) : setItems(newList);
        setLoading(false);
      });
    } else {
      setLoading(true);
      await axios.get(url).then((res) => {
        const list = res.data.response.body.items.item;
        setItems(list);
        moreFlag ? setItems([...items, ...list]) : setItems(list);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    if (moreLoad) {
      getData(selectedCategory.length > 0 ? selectedCategory : null, true, pageNumber + 1);
      setPageNumber(pageNumber + 1);
      setMoreLoad(false);
    }
  }, [moreLoad]);

  return (
    <>
      <MainSearch data={{ change: changeSearch }} />
      <WitMainWrapper onScroll={detectScroll} $change={changeSearch}>
        <MainCategory data={{ change: changeSearch }} />
        <MainNearList data={{ items: items?.slice(0, 10), loading }} />
        <MainListContent data={{ items, moreLoad, setMoreLoad }} />
      </WitMainWrapper>
      <FooterLayout />
    </>
  );
};
