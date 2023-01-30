import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BsPerson, BsChatSquareText } from 'react-icons/bs';
import Button from 'components/common/Button';

function Template({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleClick = (modalType) => {
    setModalOpen(true);
    setModalType(modalType);
  };

  return (
    <TemplateContainer>
      <HeaderContainer>
        <Logo>
          <Link to="/">
            <LogoImg src="/logo.png" />
          </Link>
        </Logo>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
        <Menu>
          <Button
            text={'Signup'}
            onClick={() => handleClick('Signup')}
            height={'24px'}
            fontSize={18}
            color={'#FF385C'}
          />
          <Button
            text={'Login'}
            onClick={() => handleClick('Login')}
            height={'24px'}
            fontSize={18}
            color={'#FF385C'}
          />
          <Button text={'Logout'} height={'24px'} fontSize={18} color={'#FF385C'} />
          <Link to="/board">
            <BsChatSquareText size={22} color={'black'} />
          </Link>
          <Link to="/mypage">
            <BsPerson size={26} color={'black'} />
          </Link>
        </Menu>
      </HeaderContainer>
      <ChildContainer>{children}</ChildContainer>
      {modalOpen ? <Modal setModalOpen={setModalOpen} modalType={modalType} /> : null}
    </TemplateContainer>
  );
}

export default Template;

const TemplateContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  box-sizing: border-box;
  z-index: 10;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
  position: fixed;
  top: 0;
`;

const Logo = styled.div`
  & a {
    ${({ theme }) => {
      return css`
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.base};
        font-weight: ${theme.fonts.weight.bold};
      `;
    }}
  }
`;

const LogoImg = styled.img`
  width: 120px;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ChildContainer = styled.div`
  width: 100vw;
  /* padding: 0 5rem; */
  margin-top: 5rem;
  box-sizing: border-box;
`;
