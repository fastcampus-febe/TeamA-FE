import LikeList from 'components/Mypage/LikeList/LikeList';
import React from 'react';
import styled from 'styled-components';

const MyLike = () => {
  return (
    <LikePage>
      <LikeList />
    </LikePage>
  );
};

const LikePage = styled.div`
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
`;

export default MyLike;
