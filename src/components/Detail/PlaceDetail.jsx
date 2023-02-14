import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function likeClick() {
  return (
    <>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
        src="https://assets5.lottiefiles.com/private_files/lf30_2putscqk.json"
        background="transparent"
        speed="1"
        controls
      ></lottie-player>
    </>
  );
}

const PlaceDetail = ({ data: { firstImage, title, addr1, overview, weather } }) => {
  const [click, setClick] = useState(false);

  return (
    <PlaceDetailContainer>
      <ContentSection>
        <Title>
          {title}
          <LikeDiv
            onClick={(e) => {
              e.preventDefault();
              setClick(!click);
            }}
          >
            {click ? (
              <FaHeart
                size="20"
                onClick={() => {
                  likeClick();
                }}
              />
            ) : (
              <FaRegHeart
                size="20"
                onClick={() => {
                  likeClick();
                }}
              />
            )}
          </LikeDiv>
        </Title>
        <p>{addr1}</p>
        <p>{overview}</p>
        <WeatherSection>
          <WeatherTitle>날씨 정보</WeatherTitle>
          {weather.map((item) => {
            return (
              <WeatherContent key={item.date}>
                <p>{item.date}</p>
                <p>
                  {item.maxTemp}°C / {item.minTemp}°C
                </p>
                <p>
                  오전
                  <p>
                    {item.weatherAM} 강수 확률 {item.precipitationAM}%
                  </p>
                </p>
                <p>
                  오후
                  <p>
                    {item.weatherPM} 강수 확률 {item.precipitationPM}%
                  </p>
                </p>
              </WeatherContent>
            );
          })}
        </WeatherSection>
      </ContentSection>
      <Img src={firstImage} alt="detail img" />
    </PlaceDetailContainer>
  );
};

export default PlaceDetail;

const PlaceDetailContainer = styled.section`
  display: flex;
  gap: 1rem;
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const LikeDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 25px;
  height: 25px;
  svg {
    color: #ff385c;
    cursor: pointer;
  }
`;

const WeatherSection = styled.section`
  margin-top: 30px;
  p {
    margin: auto;
  }
`;

const WeatherTitle = styled.section`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  justify-content: center;
  text-align: center;
`;

const WeatherContent = styled.section`
  display: flex;
  gap: 3rem;
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
`;
const Img = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 10px;
  margin-left: 20px;
`;
