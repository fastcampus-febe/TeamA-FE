import React, { useEffect, useState } from 'react';
import { getLikeRank, getReviewRank } from 'api/home';
import { loadingState } from 'atoms/loading';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import LikeRankItem from 'components/Home/LikeRank';
import ReviewRankItem from 'components/Home/ReviewRank';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Lottie from 'lottie-react';
import 'swiper/css';
import 'swiper/css/free-mode';

import airplane from 'lotties/airplane.json';
import balloon from 'lotties/balloon.json';
import bicycle from 'lotties/bicycle.json';
import bigben from 'lotties/big-ben-clock-tower.json';
import bulkwagon from 'lotties/bulk-wagon.json';
import camera from 'lotties/camera.json';
import world from 'lotties/travel-the-world.json';
import { flushSync } from 'react-dom';

const Main = () => {
  const [likeRank, setLikeRank] = useState([]);
  const [reviewRank, setReviewRank] = useState([]);

  useEffect(() => {
    async function getLikeData() {
      try {
        const likeData = await getLikeRank();
        setLikeRank(likeData);
      } catch (error) {
        console.log(error);
      }
    }
    getLikeData();
  }, []);

  useEffect(() => {
    async function getReviewData() {
      try {
        const reviewData = await getReviewRank();
        setReviewRank(reviewData);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewData();
  }, []);

  return (
    <MainContent>
      <Swiper
        dir="rtl"
        slidesPerView={1.8}
        spaceBetween={40}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Lottie animationData={airplane} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={balloon} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={bicycle} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={bigben} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={bulkwagon} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={camera} loop={true}></Lottie>
        </SwiperSlide>
      </Swiper>

      <FirstContent>
        <h1>Your Travel Of Joy.</h1>
        <div>
          <p>Travel과 함께</p>
          <p>세상의 모든 즐거움을 찾아보세요</p>
        </div>
      </FirstContent>

      <RankContainer>
        <RankTitle>찜 많은 관광지 Top 10</RankTitle>
        <RankContents>
          {likeRank.map((item) => {
            return <LikeRankItem data={item} key={item.id} />;
          })}
        </RankContents>
      </RankContainer>
      <RankContainer>
        <RankTitle>리뷰 많은 관광지 Top 10</RankTitle>
        <RankContents>
          {reviewRank.map((item) => {
            return <ReviewRankItem data={item} key={item.id} />;
          })}
        </RankContents>
      </RankContainer>
    </MainContent>
  );
};

const MainContent = styled.div`
  width: 100vw;
  padding-top: 25px;
  margin: 100px;
`;

const FirstContent = styled.div`
  max-width: 85vw;
  color: #333;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 0 auto;
  padding: 0 24px;
  margin-top: 20px;
  margin-bottom: 100px;
  box-sizing: border-box;
  h1 {
    font-size: 70px;
    line-height: 0.7;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }
  p {
    line-height: 1.5;
    font-size: 20px;
    letter-spacing: 0.1rem;
  }
`;
const RankContainer = styled.section`
  margin: 4rem 0;
`;
const RankContents = styled.section`
  display: flex;
  gap: 0.5rem;
`;
const RankTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #e03151;

  margin: 1rem 0;
`;
export default Main;
