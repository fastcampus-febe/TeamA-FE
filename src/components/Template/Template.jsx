import SignModal from 'components/SignModal/SignModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from './Menu';
import { authState } from 'atoms/auth';
import { useRecoilValue } from 'recoil';
import Avvvatars from 'avvvatars-react';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { BiSearch } from 'react-icons/bi';
import Footer from './Footer';
import { loadingState } from 'atoms/loading';
import Loading from 'components/common/Loading';
import ScrollToTop from 'components/common/ScrollToTop';

function Template({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = useRecoilValue(authState);
  const loading = useRecoilValue(loadingState);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  return (
    <TemplateContainer>
      <ScrollToTop />
      <HeaderContainer>
        <Logo>
          <Link to="/">
            <LogoImg src="/logo.png" />
          </Link>
        </Logo>
        <SearchWrap>
          <Input
            width="440px"
            padding="12px 16px"
            radius="50px"
            borderColor="#dddddd"
            lineHeight="1.2"
            placeholder="지역명 / 관광지 이름으로 검색해 보세요."
          />
          <Button
            width="30px"
            height="30px"
            position="absolute"
            top="7px"
            right="8px"
            radius="20px"
          >
            <BiSearch />
          </Button>
        </SearchWrap>
        <Navbar onClick={handleMenuClick}>
          <GiHamburgerMenu size={16} color={'black'} />
          {auth.isLoggedIn ? (
            <Avvvatars value={auth.loggedUser.id} style="shape" />
          ) : (
            <Avatar src="/images/avatar.png" />
          )}
        </Navbar>
      </HeaderContainer>
      <ChildContainer>{children}</ChildContainer>
      <Footer></Footer>
      {modalOpen ? <SignModal setModalOpen={setModalOpen} modalType={modalType} /> : null}
      {menuOpen ? (
        <Menu setMenuOpen={setMenuOpen} setModalOpen={setModalOpen} setModalType={setModalType} />
      ) : null}
      {loading && <Loading />}
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
  background-color: #fff;
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

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Navbar = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #dddddd;
  border-radius: 21px;
  padding: 6px 6px 6px 10px;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
`;

const Avatar = styled.img`
  width: 28px;
  border-radius: 50%;
  border: 1px solid #dddddd;
`;

const ChildContainer = styled.div`
  width: 100vw;
  margin-top: 5rem;
  box-sizing: border-box;
`;
