import LikeList from 'components/Mypage/LikeList/LikeList';
import React, { useEffect, useState } from 'react';
import { PageContent, Title } from '../MyPageStyle';
import likeData from 'data/MyLikeData.json';
import styled from 'styled-components';
import Pagination from 'components/common/Pagination';

const MyLike = () => {
  const [like, setLike] = useState([]);
  const [pageDisplay, setPageDisplay] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getLikeData() {
      try {
        setLike(likeData.items);
        setPageDisplay(false);
      } catch (error) {
        console.log(error);
      }
    }
    getLikeData();
  }, []);

  return (
    <PageContent>
      <Title>위시리스트(데이터는 임시로 적용) - 관광지 이름 링크 지정하기</Title>
      <LikeContent>
        {like.length > 0 ? (
          like.slice(offset, offset + limit).map((item) => {
            return <LikeList data={item} key={item.id} />;
          })
        ) : (
          <p>조회 내역이 없습니다.</p>
        )}
      </LikeContent>
      <PageDisplay pageDisplay={pageDisplay}>
        {like ? (
          <Pagination total={like.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </PageDisplay>
    </PageContent>
  );
};

const LikeContent = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const PageDisplay = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.pageDisply ? 'none' : 'block')};
`;

export default MyLike;
