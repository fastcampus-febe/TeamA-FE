import NavBar from 'components/Mypage/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Mypage = () => {
  return (
    <MyPage>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </MyPage>
  );
};

const MyPage = styled.div`
  background-color: #f5f5f5;
  padding: 40px 10rem 0;
  justify-content: center;
  height: 100vh;
  display: grid;
  grid-template-columns: 22% 70%;
  grid-template-areas: 'nav main';
  nav {
    grid-area: nav;
    padding: 10px;
  }
  main {
    grid-area: main;
    padding: 10px;
  }
`;

export default Mypage;
