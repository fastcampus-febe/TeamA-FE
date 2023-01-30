import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = ({ setMenuOpen, setModalOpen, setModalType }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setMenuOpen(false));

  const handleClick = (modalType) => {
    setModalOpen(true);
    setModalType(modalType);
  };

  return (
    <MenuContainer ref={ref}>
      <button text={'Signup'} onClick={() => handleClick('Signup')}>
        Signup
      </button>
      <button text={'Login'} onClick={() => handleClick('Login')}>
        Login
      </button>
      <button text={'Logout'}>Logout</button>
      <Link to="/board">Board</Link>
      <Link to="/mypage">MyPage</Link>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 5rem;
  padding: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 21px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
`;
