import React, { useEffect, useState } from 'react';
import { PageContent, Title } from '../MyPageStyle';
import styled from 'styled-components';
import ReviewList from 'components/Mypage/ReviewList/ReviewList';
import Pagination from 'components/common/Pagination';
import { TbClipboardX } from 'react-icons/tb';
import { getMyReview } from 'api/mypage';
import { getItem } from 'utils/storage';

const MyReview = () => {
  const [review, setReview] = useState([]);
  const [pageDisplay, setPageDisplay] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;

  const userId = getItem('user').id;
  useEffect(() => {
    async function getReviewData() {
      try {
        const data = await getMyReview(userId);
        setReview(data);
        setPageDisplay(false);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewData();
  }, []);

  return (
    <PageContent>
      <Title>나의 리뷰</Title>
      <ReviewContent>
        {review.length > 0 ? (
          review.slice(offset, offset + limit).map((item) => {
            return <ReviewList data={item} key={item.place_id} />;
          })
        ) : (
          <ReviewNoneContent>
            <TbClipboardX size="45" />
            <p>조회 내역이 없습니다.</p>
          </ReviewNoneContent>
        )}
      </ReviewContent>
      <PageDisplay pageDisplay={pageDisplay}>
        {review.length > 0 ? (
          <Pagination total={review.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </PageDisplay>
    </PageContent>
  );
};

const ReviewContent = styled.ul`
  list-style: none;
`;

const ReviewNoneContent = styled.div`
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

export default MyReview;
