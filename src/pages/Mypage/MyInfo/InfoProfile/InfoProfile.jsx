import { loadingState } from 'atoms/loading';
import { getMyInfo } from 'api/mypage';
import { PageContent, Title } from 'pages/Mypage/MyPageStyle';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { getItem } from 'utils/storage';

const InfoProfile = () => {
  const [info, setInfo] = useState([]);
  const setLoading = useSetRecoilState(loadingState);

  const userId = getItem('user').id;
  const userPW = getItem('user').password;
  // const pwLen = userPW.length - 2;

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const data = await getMyInfo(userId);
        setInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <PageContent>
      <Title>내 정보</Title>
      <ProfileContent>
        <p>가입 시 입력한 회원정보를 다시 한번 확인해주세요.</p>
        <p>신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.</p>
        <Profile>
          <li>
            <InfoForm>
              <h2>닉네임</h2>
              <span>{info.nickname}</span>
            </InfoForm>
          </li>
          <li>
            <InfoForm>
              <h2>아이디</h2>
              <span>{info.id}</span>
            </InfoForm>
          </li>
          <li>
            <InfoForm>
              <h2>비밀번호</h2>
              {/* <span>{userPW.slice(0, 2) + '*'.repeat(pwLen)}</span> */}
            </InfoForm>
          </li>
        </Profile>
      </ProfileContent>
    </PageContent>
  );
};

const ProfileContent = styled.div`
  margin-left: 7px;
  p {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const Profile = styled.ul`
  margin-top: 70px;
  li {
    margin-bottom: 20px;
    height: 40px;
  }
`;

const InfoForm = styled.div`
  display: flex;
  h2 {
    width: 80px;
    font-size: 17px;
    font-weight: 600;
    margin-right: 100px;
  }
  span {
    font-size: 16px;
    color: #717171;
  }
`;

export default InfoProfile;
