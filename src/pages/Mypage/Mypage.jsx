import NavBar from 'components/Mypage/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Mypage = () => {
  return (
    <div>
      Mypage
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Mypage;
