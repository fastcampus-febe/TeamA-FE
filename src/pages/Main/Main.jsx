import React from 'react';
import styled from 'styled-components';
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

      <SecondContent>
        <section>
          <SecondLeft>
            <div>
              <Lottie animationData={world} loop={true}></Lottie>
            </div>
            <div>
              <h2>Reason</h2>
              <span>Travel을 선택해야 하는 이유</span>
            </div>
          </SecondLeft>

          <SecondRight>
            <Right1>
              <h3>무한한 가능성의 세계</h3>
              <span>전국의 여러 관광지들을 모두 Travel에서 찾으실 수 있어요.</span>
            </Right1>
            <Right2>
              <h3>안심하고 떠나는 여행</h3>
              <span>
                수많은 리뷰가 입증하는 신뢰할 수 있는 관광지로 안심하고 여행을 떠나보세요.
              </span>
            </Right2>
            <Right3>
              <h3>더욱 쉽게 만나는 즐거움</h3>
              <span>커뮤니티를 통해 여러 사람들과 함께 여행을 떠나보세요.</span>
            </Right3>
          </SecondRight>
        </section>
      </SecondContent>
    </MainContent>
  );
};

const MainContent = styled.div`
  width: 100vw;
  padding-top: 25px;
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

const SecondContent = styled.div`
  background: linear-gradient(140deg, #fff 40%, #ffe7ec);
  width: 100%;
  padding: 0 54px;
  margin-top: 150px;
  section {
    padding: 140px 0 150px;
    margin: 0 250px 0 200px;
    display: flex;
    justify-content: space-between;
  }
`;

const SecondLeft = styled.div`
  padding-right: 25px;
  position: relative;
  div {
    z-index: 20;
    &:first-child {
      width: 200px;
      position: absolute;
      top: -70px;
      left: -60px;
    }
    &:last-child {
      position: relative;
    }
  }
  h2 {
    font-size: 60px;
    margin-bottom: 13px;
    letter-spacing: 0.2rem;
    font-weight: 500;
  }
  span {
    margin-left: 2px;
    display: block;
    font-size: 20px;
    letter-spacing: 0.15rem;
  }
`;

const SecondRight = styled.div`
  width: 65%;
  margin-top: 140px;
`;

const Right1 = styled.div`
  float: right;
  margin-bottom: 150px;
  width: 100%;
  h3 {
    text-align: right;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 500;
  }
  span {
    text-align: right;
    display: block;
  }
`;

const Right2 = styled.div`
  float: left;
  margin-bottom: 150px;
  width: 100%;
  h3 {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 500;
  }
  span {
    display: block;
  }
`;

const Right3 = styled.div`
  float: right;
  width: 100%;
  h3 {
    text-align: right;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 500;
  }
  span {
    display: block;
    text-align: right;
  }
`;

export default Main;
