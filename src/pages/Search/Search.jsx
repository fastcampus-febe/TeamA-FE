import React, { useEffect, useState } from 'react';
import searchData from 'data/SearchData.json';
import SearchItem from 'components/Search/SearchItem';
import Pagination from 'components/common/Pagination';
import { TbClipboardX } from 'react-icons/tb';
import styled from 'styled-components';

const Search = () => {
  const [search, setSearch] = useState([]);
  const [pageDisplay, setPageDisplay] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getSearchData() {
      try {
        setSearch(searchData.items);
        setPageDisplay(false);
      } catch (error) {
        console.log(error);
      }
    }
    getSearchData();
  }, []);

  return (
    <SearchContainer>
      <Title>검색 결과(임시)</Title>
      <SearchContent>
        {search.length > 0 ? (
          search.slice(offset, offset + limit).map((item) => {
            return <SearchItem data={item} key={item.id} />;
          })
        ) : (
          <NoneSearchContent>
            <TbClipboardX size="45" />
            <p>검색 결과가 없습니다.</p>
          </NoneSearchContent>
        )}
      </SearchContent>
      <PageDisplay pageDisplay={pageDisplay}>
        {search.length > 0 ? (
          <Pagination total={search.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </PageDisplay>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
`;

const Title = styled.h2`
  position: relative;
  border-bottom: 1px dashed #dadada;
  font-size: 23px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 30px;
  padding: 10px 50px 15px 20px;
  &::before {
    content: '';
    width: 4px;
    height: 23px;
    border-radius: 6px;
    background-color: #ff385c;
    margin-left: 10px;
    position: absolute;
    left: 0;
    top: 40%;
    transform: translateY(-50%);
  }
`;

const SearchContent = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style: none;
`;

const NoneSearchContent = styled.div`
  text-align: center;
  margin: 120px 0;
  color: #202020;
  font-weight: 700;
  svg {
    color: #333;
    opacity: 0.5;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
  }
`;

const PageDisplay = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.pageDisply ? 'none' : 'block')};
`;

export default Search;
