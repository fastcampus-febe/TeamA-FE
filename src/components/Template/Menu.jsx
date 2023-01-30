import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Menu = ({ setMenuOpen, setModalOpen, setModalType }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setMenuOpen(false));

  const handleClickModal = (modalType) => {
    setModalOpen(true);
    setModalType(modalType);
    setMenuOpen(false);
  };

  const handleClickMenu = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const logout = () => {
    //
  };

  return (
    <MenuContainer ref={ref}>
      <button onClick={() => handleClickModal('Signup')}>Signup</button>
      <button onClick={() => handleClickModal('Login')}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      <button onClick={() => handleClickMenu('/board')}>Board</button>
      <button onClick={() => handleClickMenu('/mypage/like')}>MyPage</button>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: fixed;
  top: 4rem;
  right: 5rem;
  z-index: 15;
  padding: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 21px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
`;
