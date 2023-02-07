import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchItem = ({ data }) => {
  const [click, setClick] = useState(false);
  const imgSrc = data.imgSrc;

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

  return (
    <SearchItemContainer>
      <Link to={'/place/' + data.id}>
        <ImgContent>
          <img src={imgSrc} alt="search img" />
        </ImgContent>
        <InfoContent>
          <h3>{data.title}</h3>
          <p>{data.adress}</p>
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
        </InfoContent>
      </Link>
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
    text-decoration: none;
    color: black;
  }
  p {
    color: #606060;
  }
`;

const LikeDiv = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  right: 10px;
  svg {
    color: #ff385c;
    cursor: pointer;
  }
`;

export default SearchItem;
