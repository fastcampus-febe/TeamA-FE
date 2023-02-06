import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const SearchItem = ({ data }) => {
  const imgSrc = data.imgSrc;

  return (
    <SearchItemContainer>
      <ImgContent>
        <img src={imgSrc} alt="search img" />
      </ImgContent>
      <InfoContent>
        <h3>{data.title}</h3>
        <p>{data.adress}</p>
        <FaHeart
          size="20"
          onClick={() => {
            alert('찜');
          }}
        />
      </InfoContent>
    </SearchItemContainer>
  );
};

const SearchItemContainer = styled.li`
  padding: 0 10px;
  width: 20%;
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

const InfoContent = styled.div`
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
    cursor: pointer;
  }
`;

export default SearchItem;
