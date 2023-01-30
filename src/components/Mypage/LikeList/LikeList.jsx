import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const LikeList = ({ data }) => {
  const imgSrc = data.imgSrc;
  return (
    <LikeLi>
      <ImgContent>
        <img src={imgSrc} alt="like img" />
      </ImgContent>
      <TextContent>
        <h3>{data.title}</h3>
        <p>{data.adress}</p>
        <FaHeart size="20" />
      </TextContent>
    </LikeLi>
  );
};

const LikeLi = styled.li`
  padding: 0 10px;
  width: 45%;
  margin-bottom: 50px;
`;

const ImgContent = styled.div`
  border-radius: 10px;
  overflow: hidden;
  height: 260px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TextContent = styled.div`
  position: relative;
  margin-top: 24px;
  h3 {
    margin-bottom: 4px;
    font-size: 20px;
    line-height: 1.4;
    font-weight: 700;
  }
  p {
    color: #606060;
  }
  svg {
    position: absolute;
    top: 0;
    right: 10px;
    color: #ff385c;
  }
`;

export default LikeList;
