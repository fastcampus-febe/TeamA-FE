import React, { useEffect, useState } from 'react';
import { PageContent, Title } from '../MyPageStyle';
import reviewData from 'data/MyReviewData.json';
import styled from 'styled-components';
import ReviewList from 'components/Mypage/ReviewList/ReviewList';
import Pagination from 'components/common/Pagination';

const MyReview = () => {
  const [review, setReview] = useState([]);
  const [pageDisplay, setPageDisplay] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 4;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getReviewData() {
      try {
        setReview(reviewData.items);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewData();
  }, []);

  console.log(review);

  return (
    <PageContent>
      <Title>리뷰 관리(데이터 임시로 적용) - 상세주소 완료되면 링크 연결하기(관광지 이름)</Title>
      <ReviewContent>
        {review.length > 0 ? (
          review.slice(offset, offset + limit).map((item) => {
            return <ReviewList data={item} key={item.place_id} />;
          })
        ) : (
          <p>조회 내역이 없습니다.</p>
        )}
      </ReviewContent>
      <PageDisplay pageDisplay={pageDisplay}>
        {review ? (
          <Pagination total={review.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </PageDisplay>
    </PageContent>
  );
};

const ReviewContent = styled.ul``;

const PageDisplay = styled.div`
  margin-top: 20px;
  display: ${(props) => (props.pageDisply ? 'none' : 'block')};
`;

export default MyReview;
