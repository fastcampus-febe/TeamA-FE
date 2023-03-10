import { postSignOut } from 'api/sign';
import { authState } from 'atoms/auth';
import { loadingState } from 'atoms/loading';
import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { removeItem } from 'utils/storage';

const Menu = ({ setMenuOpen, setModalOpen, setModalType }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setMenuOpen(false));
  const [auth, setAuth] = useRecoilState(authState);
  const setLoading = useSetRecoilState(loadingState);

  const handleClickModal = (modalType) => {
    setModalOpen(true);
    setModalType(modalType);
    setMenuOpen(false);
  };

  const handleClickMenu = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const logout = async () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      try {
        setLoading(true);
        await postSignOut();
        removeItem('user');
        removeItem('token');

        setAuth({
          isLoggedIn: false,
          loggedUser: {},
          userToken: '',
        });

        alert('로그아웃이 완료되었습니다.');
        navigate('/');
        setModalOpen(false);
      } catch (error) {
        alert('로그아웃에 실패하였습니다.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <MenuContainer ref={ref}>
      {auth.isLoggedIn ? (
        <li onClick={() => logout()}>로그아웃</li>
      ) : (
        <>
          <li onClick={() => handleClickModal('Signup')}>회원가입</li>
          <li onClick={() => handleClickModal('Login')}>로그인</li>
        </>
      )}
      <li onClick={() => handleClickMenu('/board')}>커뮤니티</li>
      {auth.isLoggedIn && <li onClick={() => handleClickMenu('/mypage/like')}>마이페이지</li>}
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.ul`
  position: fixed;
  top: 4rem;
  right: 5rem;
  z-index: 35;
  padding: 0.8rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 180px;
  display: flex;
  flex-direction: column;
  border-radius: 21px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  font-size: 15px;
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 2.6rem;
    padding: 0 1rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.shadow};
    }
  }
`;
