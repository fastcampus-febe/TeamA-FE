import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

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

const LikeRankItem = ({ data }) => {
  const [click, setClick] = useState(false);

  return (
    <ItemContainer>
      <Link to={'/place/' + data.id}>
        <Img src={data.firstImage} alt="likeRank img" />
        <ItemContentSection>
          <RankItemTitle>
            {data.title}
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
          </RankItemTitle>

          <p>{data.addr1}</p>
        </ItemContentSection>
      </Link>
    </ItemContainer>
  );
};

export default LikeRankItem;

const ItemContainer = styled.section`
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
const Img = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
`;
const ItemContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #333;
`;

const RankItemTitle = styled.p`
  font-weight: bold;
  display: flex;
  position: relative;
  margin: 10px 0;
`;

const LikeDiv = styled.div`
  position: absolute;
  right: 0;
  width: 25px;
  height: 25px;
  svg {
    color: #ff385c;
    cursor: pointer;
  }
`;
