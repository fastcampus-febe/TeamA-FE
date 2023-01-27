import NavBar from 'components/Mypage/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Mypage = () => {
  return (
    <MyPage>
      Mypage
      <NavBar />
      <Outlet />
    </MyPage>
  );
};

const MyPage = styled.div`
  background-color: #e0e0e0;
  height: 500px;
`;

export default Mypage;
