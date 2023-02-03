import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <li onClick={() => handleClickModal('Signup')}>Signup</li>
      <li onClick={() => handleClickModal('Login')}>Login</li>
      <li onClick={() => logout()}>Logout</li>
      <li onClick={() => handleClickMenu('/board')}>Board</li>
      <li onClick={() => handleClickMenu('/mypage/like')}>MyPage</li>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.ul`
  position: fixed;
  top: 4rem;
  right: 5rem;
  z-index: 15;
  padding: 0.8rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 180px;
  display: flex;
  flex-direction: column;
  border-radius: 21px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 2.6rem;
    padding: 0 1rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
