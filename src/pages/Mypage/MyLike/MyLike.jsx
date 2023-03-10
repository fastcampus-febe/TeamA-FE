import LikeList from 'components/Mypage/LikeList/LikeList';
import React, { useEffect, useState } from 'react';
import { PageContent, Title } from '../MyPageStyle';
import likeData from 'data/MyLikeData.json';
import styled from 'styled-components';
import Pagination from 'components/common/Pagination';
import { TbClipboardX } from 'react-icons/tb';
import { getMyLike } from 'api/mypage';
import { getItem } from 'utils/storage';
import { useSetRecoilState } from 'recoil';
import { loadingState } from 'atoms/loading';

const MyLike = () => {
  const [like, setLike] = useState([]);
  const [pageDisplay, setPageDisplay] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;
  const setLoading = useSetRecoilState(loadingState);

  const userId = getItem('user').id;
  useEffect(() => {
    async function getLikeData() {
      try {
        setLoading(true);
        const data = await getMyLike(userId);
        setLike(data);
        setPageDisplay(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getLikeData();
  }, []);

  return (
    <PageContent>
      <Title>위시리스트</Title>
      <LikeContent>
        {Array.isArray(like) > 0 ? (
          like.slice(offset, offset + limit).map((item) => {
            return <LikeList data={item} key={item.placeId} />;
          })
        ) : (
          <LikeNoneContent>
            <TbClipboardX size="45" />
            <p>조회 내역이 없습니다.</p>
          </LikeNoneContent>
        )}
      </LikeContent>
      <PageDisplay pageDisplay={pageDisplay}>
        {Array.isArray(like) ? (
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
  list-style: none;
`;

const LikeNoneContent = styled.div`
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

export default MyLike;
