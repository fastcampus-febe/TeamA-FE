import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBarItem from './NavBarItem';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import Avvvatars from 'avvvatars-react';
import { getItem } from 'utils/storage';
import { getMyInfo } from 'api/mypage';

const NavBar = () => {
  const [nickname, setNickname] = useState('');
  const userId = getItem('user').id;

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMyInfo(userId);
        setNickname(data.nickname);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <MyPage>
      <MyPageNav>
        <UserImg>
          <Avvvatars value={userId} style="shape" />
        </UserImg>
        <h3>{nickname}</h3>
      </MyPageNav>
      <MyPageNav>
        <ul>
          <NavBarItem icon={<FaRegHeart />} page={'/mypage/like'} title={'위시리스트'} />
          <NavBarItem icon={<MdOutlineRateReview />} page={'/mypage/review'} title={'나의 리뷰'} />
          <NavBarItem icon={<FiSettings />} page={'/mypage/info'} title={'내 정보 관리'} />
        </ul>
      </MyPageNav>
    </MyPage>
  );
};

const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: #fff;
  border-radius: 10px;
`;

const MyPageNav = styled.nav`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px;
  h3 {
    margin: 0 auto 20px;
    font-size: 20px;
    font-weight: 600;
  }
  ul {
    padding-left: 0;
    list-style: none;
    a {
      padding: 1rem;
      display: flex;
      align-items: center;
      color: inherit;
      cursor: pointer;
      text-decoration: none;
      span {
        margin-left: 10px;
      }
      &:hover {
        /* color: #ff385c; */
        background-color: rgb(250, 250, 250);
        font-weight: 600;
      }
    }
  }
`;

const UserImg = styled.div`
  width: 90px;
  height: 90px;
  margin: 30px auto 20px;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0px 0px 10px #e0e0e0;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
  }
  svg {
    width: 50px;
  }
`;

export default NavBar;
